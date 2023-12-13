'use strict'
const express = require('express')
const movieRouter = express.Router()
const movieController = require('../controllers/movieController');

movieRouter.route('/api/movie')
.get((req,res) => movieController.getMovies(req,res))
.post((req,res) => movieController.createMovie(req,res))

movieRouter.route('/api/movie/:name')
.get((req,res) => movieController.getMovie(req,res))

module.exports = movieRouter