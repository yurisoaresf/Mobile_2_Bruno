'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const prodSchema = new Schema({
    name: {type: String, required: true, unique: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    code: {type: String, required: true},
    image: {type: String, required: true}

})

module.exports = mongoose.model('Product', prodSchema)