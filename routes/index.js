const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model.js");

/* GET /

This is a health check. It allows us to see that the API is running.
*/
router.get("/", async (req, res, next) => {
  try {
    const allMovies = await Movie.find().select({ title: 1, director: 1 });
    res.json(allMovies) 
    // { success: true, name: "lab-express-cinema" });
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const id = req.params.id;
    const movieInfo = await Movie.findById(id)
    res.status(200).json(movieInfo);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
