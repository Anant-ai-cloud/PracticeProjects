import { Server } from "socket.io"
import http from "http"
import cors from "cors"

const httpServer = http.createServer()

const io = new Server(httpServer,{
    cors: {
        origin: "*",
        credentials: true
    }
})

io.on("Connection", (socket)=>{
    console.log(`Socket ${socket.id} get connected`)
})

export {io, httpServer}