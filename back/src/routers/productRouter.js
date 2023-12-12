'use strict'
const express = require('express')
const prodRouter = express.Router()

prodRouter.route('/api/product')
.get((req,res) => prodController.getProducts(req,res))
.post((req,res) => prodController.createProduct(req,res))

prodRouter.route('/api/product/:code')
.get((req,res) => prodController.getProduct(req,res))
.delete((req,res) => prodController.deleteProduct(req,res))
.put((req,res) => prodController.updateProduct(req,res))

module.exports = prodRouter