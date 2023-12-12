'use strict'

const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController')

userRouter.route('/api/user')
.get((req,res) => userController.getUsers(req,res))
.post((req,res) => userController.createUser(req,res))


userRouter.route('/api/user/:email')
.get((req,res) => userController.getUser(req,res))
.delete((req,res) => userController.deleteUser(req,res))
.put((req,res) => userController.updateUser(req,res))

userRouter.route('/api/user/auth')
.post((req,res) => userController.auth(req,res))

module.exports = userRouter