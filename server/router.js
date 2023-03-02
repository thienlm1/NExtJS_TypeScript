const router = require("express").Router();
const { login} = require("./controllers/login");
const { auth} = require("./controllers/auth");


router.post("/login", login);
router.post("/auth", auth);

module.exports = router;
