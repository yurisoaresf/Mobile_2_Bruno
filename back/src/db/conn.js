const mongoose = require('mongoose')

async function main(){
    try{
        await mongoose.connect("mongodb+srv://lucasrian:TNZwvO46aXVViiLD@cluster0.acp6ynz.mongodb.net/?retryWrites=true&w=majority");
        console.log("conectado ao banco")
    }catch (error){
        console.log(`Erro: ${error}`);
    }
}

module.exports = main;