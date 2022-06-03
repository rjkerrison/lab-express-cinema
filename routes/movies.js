const router = require('express').Router(),
  mongoose = require(`mongoose`),
  Movie = require(`../models/movie.model`);

router.get('/movies', async (req, res, next) => {
  try {
    const movies = await Movie.find({}, { title: 1, director: 1 });

    return res.status(200).json(movies);
  } catch (error) {
    next(error);
  }
});

router.get('/movie/:id', async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id, { __v: 0 });

    return res.status(200).json(movie);
  } catch (error) {
    if (error.kind === `ObjectId`) {
      return res.status(404).json({ message: `No such movie with id: ${req.params.id}` });
    }
    next(error);
  }
});


module.exports = router;