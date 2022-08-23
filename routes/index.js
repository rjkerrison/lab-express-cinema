const express = require('express')
const router = express.Router()
const express = require('express')
const router = express.Router
const Movie = require("../models/movie.model")

/* GET /

This is a health check. It allows us to see that the API is running.
*/


router.get('/', (req, res, next) =>
  res.json({
    success: true,
    name: 'lab-express-cinema'
  })
)

module.exports = router