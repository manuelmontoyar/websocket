import { useEffect } from "react"
import { useState } from "react"
import { io } from "socket.io-client"

function App() {
  const[socket, setSocket] = useState()
  const[inputMessage, setInputMessage] = useState()

  useEffect(() =>{
    const newSocket = io("localhost:3002")
    setSocket(setSocket)

    return () => {
      newSocket.disconnect()
    }
  }, [] )

  const enviar = () => {
    e.preventDefault()
    if(socket){
      socket.emit("message", inputMessage)
    }
  }

  return (
    <div>
      <form>
        <input type="text" placeholder="Escribe el mensaje"/>
        onChange={(e) => setInputMessage(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )

}

export default App