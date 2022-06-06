const express = require("express");
const router = express.Router();
const Movies = require("../models/Movie.model");

router.get("/", async (req, res, next) => {
  try {
    const allMovies = await Movies.find().select("title director");
    res.status(200).json(allMovies);
  } catch (error) {
    res.json(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const myMovie = await Movies.findById(id);
    res.status(200).json(myMovie);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
