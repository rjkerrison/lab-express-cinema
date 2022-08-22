const express = require("express");
const router = express.Router();

/* GET /

This is a health check. It allows us to see that the API is running.
*/
router.get("/", (req, res, next) =>
  res.json({ success: true, name: "lab-express-cinema" })
);

//get movies
const Movie = require("../models/Movie.model");

router.get("/movies", async (req, res) => {
  const movies = await Movie.find().select("title director");
  res.json({ movies });
});

//get movie ID
router.get("/movie/:id", async (req, res) => {
  const movieId = await Sock.findById(req.params.id);
  res.json({ movieId });
});

module.exports = router;
