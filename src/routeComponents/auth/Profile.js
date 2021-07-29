import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import api from '../../apis/api'

function Profile() {
  const [state, setState] = useState({
    certificatesTerapies: '',
    messengerID: '',
    postID: '',
    name: '',
    email: '',
    occupation: '',
    location: '',
    age: '',
    phoneNumber: '',
  })

  const [messages, setMessages] = useState([])

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await api.get('/profile')
        const { data } = response
        setState(data)

        const message = await api.get('/user-received-messages')
        setMessages(message.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchProfile()
  }, [])

  console.log({ messages })

  return (
    <div
      className="container white-box"
      style={{ maxWidth: '400px', color: 'black' }}
    >
      <h1 className="d-flex justify-content-center">Perfil</h1>
      <hr />

      <img
        className="img-fluid rounded-circle"
        src={state.profilePictureUrl}
        alt="Sua foto de perfil"
      />

      <p>
        <strong>Nome: </strong>
        {state.name}
      </p>

      <p>
        <strong>Idade:</strong>
        {state.age}
      </p>

      <p>
        <strong>Localição:</strong>
        {state.location}
      </p>

      <p>
        <strong>Ocupação:</strong>
        {state.occupation}
      </p>

      <h3 className="d-flex justify-content-center">Contato</h3>
      <hr />

      <p>
        <strong>Telefone:</strong>
        {state.phoneNumber}
      </p>

      <p>
        <strong>E-mail:</strong>
        {state.email}
      </p>

      <h3 className="d-flex justify-content-center">Mensagens</h3>
      <hr />

      <p>
        <strong>Mensagens:</strong>
        {messages.map((message) => {
          return (
            <div>
              <p>{message.userName_sending}:</p>
              <p>{message.messagebody}</p>
            </div>
          )
        })}
      </p>

      <Link
        className="btn btn-primary d-flex justify-content-center"
        to="/api/profile/edit"
      >
        Editar Perfil
      </Link>
    </div>
  )
}

export default Profile
