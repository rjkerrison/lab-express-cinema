const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: Schema.Types.String,
    required: true,
  },

  director: {
    type: [Schema.Types.String],
    required: true,
  },

  stars: {
    type: [Schema.Types.String],
    required: true,
  },

  image: {
    type: Schema.Types.String,
  },

  description: { type: Schema.Types.String, required: true },

  showtimes: {
    type: [Schema.Types.String],
    required: true,
  },
});

const Movie = mongoose.model("movies", movieSchema);

module.exports = Movie;
