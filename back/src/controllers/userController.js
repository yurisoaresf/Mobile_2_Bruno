'use strict'

const userModel = require('../models/userModel')
const jsonWebToken = require('jsonwebtoken')

const userController = {

    getUsers: async (req,res) => {
        const result = await userModel.find({})
        res.status(200).json(result)
    },

    getUser: async (req,res) => {
        const result = await userModel.findOne({email: req.params.email})
        res.status(200).json(result)
    },

    createUser: async (req,res) => {
        await userModel.create(req.body)
        console.log("usuario criado com sucesso")
        res.status(201).json({message: "Usuário criado com sucesso"})

    },

    deleteUser: (req,res) => {

    },

    updateUser: (req,res) => {

    },

    auth: async (req,res) => {
        try{
            const result = await userModel.findOne({login: req.body.login, password: req.body.password})
            if(result){
                const secret = 'liahuybsflihasvfbolajiwefvhaoliwvyfv'
                const token = await jsonWebToken.sign(req.body, secret)
                console.log("Usario " + req.body.login + " Logado com sucesso" )
                res.status(200).json({message: "Usuário logado", userData:{token: token, login: req.body.login, name: result.name}})
                
            } else {
                res.status(403).json({message: 'Credenciais inválidas'})
            }
        } catch(err) {
            res.status(403).send({message: err.message})
        }

    }
}
module.exports = userController