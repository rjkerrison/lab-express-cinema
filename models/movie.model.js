const { Schema, SchemaTypes, model } = require("mongoose");

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String],
  },
  { timestamps: true }
);

const Movie = model("Movie", movieSchema);

module.exports = Movie;
