const { Schema, SchemaTypes, model } = require("mongoose");

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: [{ type: String }],
  image: String,
  description: String,
  showtimes: [{ type: String }],
});

const Movie = model("Movie", movieSchema);

module.exports = Movie;
