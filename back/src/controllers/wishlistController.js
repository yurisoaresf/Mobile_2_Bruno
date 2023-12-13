'use strict'
const wishlistModel = require('../models/wishlistModel')
const movieModel = require('../models/movieModel')

  
const wishlistController = {
    getWishlist: async (req,res) => { 
        const result = await wishlistModel.findOne({owner: req.params.owner})
        res.status(200).json(result)
     },
    addMovie: async (req,res) => {
        
        const movie = await movieModel.findOne({name: req.params.name})
         const result = await wishlistModel.findOneAndUpdate( {owner: req.params.owner }, {$addToSet : {movies: movie}}, {new: true});
         res.status(200).json(result)
     },
     removeMovie: async (req,res) => { 
         const result = await wishlistModel.findOneAndUpdate( {owner: req.params.owner }, {$pull : {movies: {name: req.params.name }}}, {new: true});
         res.status(200).json(result)
     },   
}

module.exports = wishlistController