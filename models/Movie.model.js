// Iteration #1

const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String],
});

const Movie = mongoose.model("Movies", movieSchema);

module.exports = Movie;
