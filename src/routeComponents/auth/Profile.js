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
    profilePictureUrl: '',
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
      className="container white-box fadeInDown"
      style={{ maxWidth: '400px', color: 'black' }}
    >
      <h2 className="d-flex justify-content-center">Perfil</h2>
      <hr />
    
    <div style={{display: 'flex', justifyContent:'center'}}>
    <img
        className="img-fluid rounded-circle"
        src={state.profilePictureUrl}
        alt="Sua foto de perfil"
        style={{marginBottom: '15px'}}
      />
    </div>
      
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
                className="card border-dark mb-3 mt-2"
                style={{ maxWidth: '28rem' }}
              >
                <p>
                  <div className="card-header">
                    <strong>Autor: </strong>
                    {message.userName_sending}:
                  </div>
                </p>

                <p className="card-text" style={{padding: '10px'}}>{message.messagebody}</p>
                <div className="d-flex justify-content-center">
                  <Link
                    type="submit"
                    className="btn btn-outline-primary  fadeIn.second mb-2"
                    to={`/message/?id=${message.userId_sending}`}
                    style={{
                      height: '25px',
                      width: '110px',
                      paddingBottom: '10px',
                      paddingTop: '0px',
                    }}
                  >
                   <strong>Responder</strong> 
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
