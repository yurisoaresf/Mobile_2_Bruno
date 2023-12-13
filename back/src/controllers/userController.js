'use strict'

const userModel = require('../models/userModel')
const jsonWebToken = require('jsonwebtoken')
const bcrypt = require("bcrypt");




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
        const userExists = await userModel.findOne({ email: req.body.email, login: req.body.login });
        const email = req.body.email
        const login = req.body.login
        const password = req.body.password
        const image = req.body.image
        if (userExists) {
             return res.status(422).json({ msg: "O login ou email já é utilizado" });
        }
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);    
        const user = new userModel({
            email, 
            login,
            password : passwordHash, 
            image
          });
        await userModel.create(user)
        console.log("usuario criado com sucesso")
        res.status(201).json({message: "Usuário criado com sucesso"})

    },

    deleteUser: (req,res) => {

    },

    updateUser: (req,res) => {

    },

    auth: async (req,res) => {
        try{
                
            const result = await userModel.findOne({login: req.body.login})
            
             if(result){
                const secret = 'liahuybsflihasvfbolajiwefvhaoliwvyfv'
                const token = await jsonWebToken.sign(req.body, secret)
                const checkPassword = await bcrypt.compare(req.body.password, result.password);
                if(checkPassword){
                    console.log("Usario " + req.body.login + " Logado com sucesso" )
                    res.status(200).json({message: "Usuário logado", userData:{token: token, login: req.body.login, image: result.image}})
                } else {
                    res.status(403).json({message: 'Senha invalida'})
                }
            } else {
                res.status(403).json({message: 'Login invalido'})
            }
        } catch(err) {
            res.status(403).send({message: err.message})
        }

    }
}
module.exports = userController