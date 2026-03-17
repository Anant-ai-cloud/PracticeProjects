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
   
    setSocket(socket)

    return ()=>{
      socket.disconnect()
    }

  },[])

  socket?.on("others", (username)=>{
    console.log(username)
  })

  const handleSubmit = ()=>{
    if(socket && username) socket.emit("getuser", username)
  }

  return (
   <>
   <input className='input' value={username} onChange={(e)=> setUsername(e.target.value)}/>
   <button className='btn' type='submit' onClick={handleSubmit}>Submit</button>
   </>
  )
}

export default App
