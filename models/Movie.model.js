const { Schema, model } = require('mongoose');

// define the schema
const movieSchema = new Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String]
});

// declare the model
const Movie = model('Movie', movieSchema);

// export the model
module.exports = Movie;