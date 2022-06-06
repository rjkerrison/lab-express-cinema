const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const filmSchema = new Schema({
    title : String,
    director : String,
    stars : [String],
    image : String,
    Description : String,
    showtimes : [String]
})

const Film = model('film', filmSchema);
module.exports = Film;