const express = require('express');
const router = express.Router();

/* GET /
This is a health check. It allows us to see that the API is running.
*/
router.get('/', (req, res, next) =>
  res.json({ success: true, name: 'lab-express-cinema' })
	  );

// GET /movies
const Movie = require('../models/Movie.model.js');

router.get('/movies', async (req, res) => {
  const movies = await Movie.find({}).select("title director");
  res.json({ movies });
});

// GET /movie/:id
router.get('/movie/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.json({ movie });
});

module.exports = router;
