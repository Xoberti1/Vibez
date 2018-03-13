const router = require("express").Router();
const login = require("./signin");

// Book routes
router.use("/signin", login);

module.exports = router;