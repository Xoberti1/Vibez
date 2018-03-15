const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const passport = require("passport");
const authRouter = express.Router();

authRouter.post('/login',
    //passport.authenticate('local'),
    function (req, res) {
        // If this function gets called, authentication was successful.
        // `req.` contains the authenticated user.
        res.redirect('/users/' + req.username);
        console.log("you signed in")
        // return res.json({blah: "blah"})
    });

module.exports = authRouter