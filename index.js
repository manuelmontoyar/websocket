const express = require("express")
const  { createServer } = require("node:http")
const { Server } = require("socket.io")
const cors = require("cors")

const app = express()
const server = createServer(app)

const io = new Server(server, {cors:
    {
        origin: "*"
    }
})

io.on("connection", (socket) => {
    console.log("Usuario conectado")

    socket.emit("message", "Holi UwU")

    socket.on("punto", (msg) => {
        socket.emit("confirmation", "Mensaje enviado")
        socket.broadcast.emit("msg", "Enviaron esto: "+ msg)
    })
})

app.get("/",(req,res) => {
    res.send("Hola Mundo")
})

server.listen(3000, () => {
    console.log("Estoy corriendo")
})