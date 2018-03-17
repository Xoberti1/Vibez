const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/vibez",
  {
    useMongoClient: true
  }
);

const userSeed = [
  {
    username: "xoberti",
    password: "catinthehat",
  },
  {
    title: "bhoang",
    author: "greeneggsandham",
  },
  {
    title: "vmontemayor",
    author: "thelorax",
  },
  {
    title: "atrevino",
    author: "foxinsox",
  },
  {
    title: "ihatfield",
    author: "hoponpop",
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
