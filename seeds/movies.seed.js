const movies = require(`./movies.data`),
  mongoose = require(`mongoose`),
  Movie = require(`../models/movie.model`);

// ℹ️ Connects to the database
require(`../db/index`)();

(async () => {
  try {
    await Movie.deleteMany();

    const insertedMovies = await Movie.insertMany(movies);

    console.log(`${insertedMovies.length} movies were created`);

    return mongoose.disconnect();
  } catch (error) {
    console.error(error);
  }
})()