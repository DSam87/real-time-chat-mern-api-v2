const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const { MONGO_URL} = process.env;
const postRoute = require("./Routes/PostRoute");
const { corsOptions } = require("./config/corsOptions");
const PORT = process.env.PORT || 3500

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((err) => console.error(err));


app.use(cors(corsOptions));
app.use(cookieParser());

app.use(express.json());

app.use("/", postRoute);
