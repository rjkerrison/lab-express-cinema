// const {
//     default: mongoose
// } = require('mongoose')

const MONGO_URI = 'mongodb://localhost:27017/Express_Cinema'

async function openConnection() {
    await mongoose.connect(MONGO_URI)
}

module.exports = openConnection
// connected to database


const mongoose = require('mongoose')
const {
    Schema,
    model
} = mongoose


// check later to change the name of variable conflict 
// with variable in movie.seed.js
const moviesSchema = new Schema[{
    tittle: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    stars: {
        // check if type array of string required
        type: [String],
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    showtimes: {
        type: [String],

    }
}]

const movies = model('movies', moviesSchema)

module.exports = movies


// run $ mongoimport --db companiesDB --collection companies --file data.json to import
// find how model where imported
// check server connection