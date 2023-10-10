const router = require("express").Router();
const { deleteUser } = require("../Controllers/UserController");

router.post("/delete-user", deleteUser);

module.exports = router;
