'use strict'
require('dotenv').config()
const express = require('express')
const app = express ()
const userRouter = require('./routers/userRouter')
const movieRouter = require('./routers/movieRouter')
const cors = require('cors');
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const conn = require("./db/conn");

io.on("connection", socket => {
    console.log("A user connected!");
    
    socket.on("chat message", msg => {
        console.log("mensagem enviada:", msg);
        io.emit("chat message", msg);
    });
});
conn()

app.use(cors());
app.use(express.json())
app.use(userRouter)
app.use(movieRouter)


server.listen(3000,() => console.log("Servidor está online! " + 3000))