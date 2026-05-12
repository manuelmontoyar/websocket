import { useEffect } from "react"
import { useState } from "react"
import { io } from "socket.io-client"

function App() {
  const[socket, setSocket] = useState()
  const[inputMessage, setInputMessage] = useState()
  const[mensajeRecibido, setMensajeRecibido] = useState([])
  const[user, setUser] = useState([])

  useEffect(() =>{
    const newSocket = io("localhost:3002")
    setSocket(setSocket)

    newSocket.on("message",(msg) =>{
      setMensajeRecibido(msg)
    })

    setUser(prompt("Ingrese su nombre"))

    return () => {
      newSocket.disconnect()
    }
  }, [] )

  const enviar = (e) => {
    e.preventDefault()
    if(socket){
      socket.emit("message", (user, inputMessage))
    }
  }

  return (
    <div>
      <form onSubmit={enviar}>
        <input type="text" placeholder="Escribe el mensaje"
        onChange={(e) => setInputMessage(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      <ul>
        {mensajeRecibido.map( mensaje => <li>{mensaje}</li>)
      }
      </ul>
      
    </div>
  )

}

export default App