const { Schema, model } = require("mongoose");

// define the schema
const movieSchema = new Schema({
  title: { type: Schema.Types.String },
  director: { type: Schema.Types.String },
  stars: {
    type: Schema.Types.Array,
  },
  image: { type: Schema.Types.String },
  description: { type: Schema.Types.String },
  showtimes: {
    type: Schema.Types.Array,
  },
});

// declare the model
const Movie = model("Movie", movieSchema);

// export the model
module.exports = Movie;
