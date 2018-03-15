const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const passport = require("passport");
const authRouter = express.Router();
const userController = require("../../controllers/userController");

// Matches with "/api/books"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = authRouter;