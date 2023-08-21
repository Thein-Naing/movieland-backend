const mongoose = require("mongoose");

//import bcrypt.
// const bcrypt = require("bcrypt");

// install validator and import .
// const validator = require("validator");

const movieSchema = new mongoose.Schema({

  ObjectId: {
    type: Integer,
    required: true
  },

  imdbId: {
    type: String,
    required: true
  },

  title: {
    type: String,
    required: true
  },

  releaseDate: {
    type: String,
    required: true,
  },

  trailerLink: {
    type: String,
    required: true,
  },

  poster: {
    type: String,
    required: true,
  },
  genres: {
    type: String,
    required: true,
  },
  backdrops: {
    type: String,
    required: true,
  },

  reviewIds: {
    type: String,
    required: true,
  },
});


module.exports = mongoose.model("Movie", movieSchema)
