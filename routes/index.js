const express = require("express");
const router = express.Router();
const Movie = require("../models/movie.model");
/* GET /

This is a health check. It allows us to see that the API is running.
*/
router.get("/", (req, res, next) => res.json({ success: true, name: "lab-express-cinema" }));

router.get("/movies", async (req, res) => {
  const movies = await Movie.find().select({ title: 1, director: 1 });
  res.json(movies);
});

router.get("/movies/:id", async (req, res) => {
  const movies = await Movie.findById(req.params.id);
  console.log(req.params.id);
  console.log(movies);
  res.json(movies);
});

module.exports = router;
