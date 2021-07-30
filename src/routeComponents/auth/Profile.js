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
      // try {
      //   const message = await api.delete('/message/delete')
      //   setMessages(message.data)
      // } catch (err) {
      //   console.error(err)
      // }
    }
    fetchProfile()
  }, [])

  console.log({ messages })

  return (
    <div
      className="container white-box"
      style={{ maxWidth: '400px', color: 'black' }}
    >
      <h2 className="d-flex justify-content-center">Perfil</h2>
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

      <h5 className="d-flex justify-content-center">Contato</h5>
      <hr />

      <p>
        <strong>Telefone:</strong>
        {state.phoneNumber}
      </p>

      <p>
        <strong>E-mail:</strong>
        {state.email}
      </p>

      <h5 className="d-flex justify-content-center">Mensagens</h5>
      <hr />

      <div>
        <p>
          <strong>Mensagens Recebidas:</strong>
          {messages.map((message) => {
            return (
              <div
                className="card border-dark mb-3"
                style={{ maxWidth: '28rem' }}
              >
                <p>
                  <div className="card-header">
                    <strong>Autor: </strong>
                    {message.userName_sending}:
                  </div>
                </p>

                <p className="card-text">{message.messagebody}</p>
                <div className="d-flex justify-content-flex-center">
                  <Link
                    type="submit"
                    className="btn btn-outline-primary  fadeIn.second"
                    to={`/message/?id=${message.userId_sending}`}
                    style={{
                      height: '25px',
                      width: '110px',
                      paddingBottom: '10px',
                      paddingTop: '0px',
                    }}
                  >
                    Responder
                  </Link>
                  {/* <div>
                    <Link
                      type="submit"
                      className="btn btn-outline-primary  fadeIn.second"
                      to={`/message/delete/?id=${message.messengerID}`}
                      style={{
                        height: '25px',
                        width: '110px',
                        paddingBottom: '10px',
                        paddingTop: '0px',
                      }}
                    >
                      Deletar
                    </Link>
                  </div> */}
                </div>
              </div>
            )
          })}
        </p>
      </div>
    </div>
  )
}

export default Profile
