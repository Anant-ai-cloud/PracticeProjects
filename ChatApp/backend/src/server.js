import {httpServer} from "./config/socketConn.js";

httpServer.listen(4000, ()=>{
    console.log("Socket server is listening on port", 4000)
})