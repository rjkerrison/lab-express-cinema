const express = require("express");
const router = express.Router();

//Import Movie Model
const Movie = require("../models/movie.model");

// GET All movies

router.get("/", async (req, res, next) => {
  try {
    const movies = await Movie.find();
    console.log(movies);
    res.status(200).json(movies);
  } catch (err) {
    next(err);
  }
});

// GET One movie Info with the ID

router.get("/:movieId", async (req, res, next) => {
  try {
    const movieId = req.params.movieId;
    const oneMovie = await Movie.findById(movieId);
    console.log(oneMovie);
    res.status(200).json(oneMovie);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
