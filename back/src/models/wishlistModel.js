'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const movieSchema = require('./movieModel')



const wishlistSchema = new Schema({
    owner: {type: String, required: true, unique: true},
    movies: {type: [movieSchema.schema] }, 
})

module.exports = mongoose.model('wishlist', wishlistSchema)