const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  title: {
    type: Schema.Types.String,
  },
  director: {
    type: Schema.Types.String,
  },
  stars: {
    enum: [Schema.Types.String],
  },
  image: {
    type: Schema.Types.String,
  },
  description: {
    type: Schema.Types.String,
  },
  showtimes: {
    enum: [Schema.Types.String],
  },
});

const Movie = mongoose.model("movies", moviesSchema);

module.exports = Movie;
