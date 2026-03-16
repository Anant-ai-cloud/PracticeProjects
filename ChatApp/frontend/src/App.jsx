import { useEffect } from 'react'
import { useState } from 'react'
import { io } from "socket.io-client"



function App() {
  const [socket, setSocket] = useState(null)
  const [username, setUsername] = useState("")

  useEffect(()=>{

    const socket = io("http://localhost:4000")

    socket.username = username

    socket.connect()
    socket.emit("getuser", socket.username)
    
    setSocket(socket)

  },[username])

  return (
   <>
   <input className='input' value={username} onSubmit={(e)=> setUsername(e.target.value)}/>
   <button className='btn' type='submit'>Submit</button>
   </>
  )
}

export default App
