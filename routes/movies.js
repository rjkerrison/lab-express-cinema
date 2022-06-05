const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie.model.js");

router.get("/movies", async (req, res, next) => {
  try {
    const allMovies = await Movie.find().select({
      title: 1,
      _id: 0,
      director: 1,
    });
    res.status(200).json(allMovies);
  } catch (err) {
    next(err);
  }
});

router.get("/movies/:id", async (req, res, next) => {
  try {
    const oneMovie = await Movie.findById(req.params.id);
    res.status(200).json(oneMovie);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
