'use strict'
const express = require('express')
const wishlistRouter = express.Router()
const wishlistController = require('../controllers/wishlistController');



wishlistRouter.route('/api/wishlist/:owner')
.get((req,res) => wishlistController.getWishlist(req,res))

wishlistRouter.route('/api/wishlist/:owner/:name')
.put((req,res) => wishlistController.addMovie(req,res))
.delete((req,res) => wishlistController.removeMovie(req,res))

module.exports = wishlistRouter