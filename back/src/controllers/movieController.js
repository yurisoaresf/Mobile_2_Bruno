'use strict'
const movieModel = require('../models/movieModel')

var corsOptions = {
    origin: 'http://localhost:8082',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

  

const movieController = {
    getMovies: async (req,res) => {
       const result = await movieModel.find({})
       console.log(result)
       res.status(200).json(result)
    },
    getMovie: async (req,res) => { 
        const result = await movieModel.findOne({name: req.params.name})
        res.status(200).json(result)
     },
    createMovie: async (req,res) => {
        await movieModel.create(req.body)
        res.status(201).json({message: "Filme criado com sucesso"})
     },    
}

module.exports = movieController