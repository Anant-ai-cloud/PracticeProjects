import { useEffect } from 'react'
import { useState } from 'react'
import { io } from "socket.io-client"



function App() {
  const [socket, setSocket] = useState(null)

  useEffect(()=>{

    const socket = io("http://localhost:4000",{
      withCredentials: true
    })

    socket.connect()
    socket.emit("Connection", socket)
    setSocket(socket)

  },[])

  return (
   <>
   </>
  )
}

export default App
