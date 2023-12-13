'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    name: {type: String, required: true, unique: true},
    directedBy: {type: String, required: true},
    overview: {type: String, required: true},
    gender: {type: String, required: true},
    duration: {type: String, required: true},
    image: {type: String, required: true}

})

module.exports = mongoose.model('Movie', movieSchema)