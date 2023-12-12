'use strict'
require('dotenv').config()
const express = require('express')
const app = express ()
const userRouter = require('./routers/userRouter')
const productRouter = require('./routers/productRouter')
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/geekback')


app.use(express.json())
app.use(userRouter)
app.use(productRouter)

app.listen(3000, () => {
    console.log("Servidor está online!")
})