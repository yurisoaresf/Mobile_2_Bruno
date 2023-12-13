'use strict'
const express = require('express')
const movieRouter = express.Router()
const movieController = require('../controllers/movieController');
const jwt = require('jsonwebtoken')

function checkToken(req, res, next) {
    const authHeader = req.headers["authorization"]; 
    console.log("teste" + authHeader)
    const token = authHeader && authHeader.split(" ")[1];
    console.log(req.headers)
    
    if (!token) return res.status(401).json({ msg: "Acesso negado!" });
  
    try {
      const secret = 'liahuybsflihasvfbolajiwefvhaoliwvyfv'
  
      jwt.verify(token, secret);
      
      next();
    } catch (err) {
        console.log(err)
      res.status(400).json({ msg: "O Token é inválido!" });
    }
}

movieRouter.route('/api/movie' )
.get( checkToken, async(req,res) => movieController.getMovies(req,res))
.post((req,res) => movieController.createMovie(req,res))

movieRouter.route('/api/movie/:name')
.get((req,res) => movieController.getMovie(req,res))

module.exports = movieRouter