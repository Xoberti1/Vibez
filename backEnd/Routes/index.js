const path = require("path");
// attach all routes to this constant "routes"
const routes = require("express").Router();
const passportRoutes = require("./signin");

// auth Routes
routes.use("/auth", passportRoutes);

// // If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = routes;
