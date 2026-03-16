import { Server } from "socket.io"
import http from "http"
import cors from "cors"

const httpServer = http.createServer()

const io = new Server(httpServer,{
    cors: {
        origin: "*",
    }
})

io.on("connection", (socket)=>{
    console.log(`Socket ${socket.id} get connected`)
    socket.on("getuser", (username)=>{
        console.log(`${username} just got connected`)
    })
})



export {io, httpServer}