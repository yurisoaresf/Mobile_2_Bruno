'use strict'
const productModel = require('..models/productModel')

const prodController = {
    getProducts: async (req,res) => {
       const result = await productModel.find({})
       res.status(200).json(result)
    },
    getProduct: async (req,res) => {
        const result = await productModel.findOne({code: req.params.code})
        res.status(200).json(result)
     },
    createProduct: async (req,res) => {
        await productModel.create(req.body)
        res.status(201).json({message: "Filme criado com sucesso"})
     },
    deleteProduct: (req,res) => {

    },
    updateProduct: (req,res) => {

    }
}

module.exports = prodController