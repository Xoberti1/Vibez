const router = require("express").Router();
const login = require("./signin");

// Book routes
router.use("/signing", login);

module.exports = router;