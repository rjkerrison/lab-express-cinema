const express = require("express");
const router = express.Router();

/* GET /

This is a health check. It allows us to see that the API is running.
*/
router.get("/movies", async (req, res) => {
  const movies = await movies.find();
  res.json({ movies });
});
router.get("/", (req, res, next) =>
  res.json({ success: true, name: "lab-express-cinema" })
);

module.exports = router;
