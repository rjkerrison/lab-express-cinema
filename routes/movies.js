const express = require("express");
const router = express.Router();

//Import Movie Model
const Movie = require("../models/movie.model");

/* GET /

This is a health check. It allows us to see that the API is running.
*/
router.get("/", async (req, res, next) => {
  try {
    const movies = await Movie.find();
    console.log(movies);
    res.status(200).json(movies);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
