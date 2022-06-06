const express = require('express')
const router = express.Router()
const Film = require("../models/movie.model")

/* GET /

This is a health check. It allows us to see that the API is running.
*/
router.get('/', (req, res, next) =>
  res.json({ success: true, name: 'lab-express-cinema' })
)

router.get('/movies', async (req, res, next) => {
  try {
    const listOfFilms = await Film.find({ title: 1, director: 1 });
    res.json(listOfFilms)
  } catch (error) {
    next(error);
  }
})

router.get('/movies/:id', async (req, res, next) => {
  try{
    const movies = await Film.findById(req.params.id, { __v: 0 });
    return res.status(200).json(movies);
  } catch (error) {
    next(error);
  }
});

module.exports = router
