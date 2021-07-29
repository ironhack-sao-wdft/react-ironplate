import '../../assets/styles/index.css'
import React, { useState } from 'react'
import api from '../../apis/api'

import TextInput from '../../components/TextInput'

function Signup(props) {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    occupation: '',
    location: '',
    certificatesTerapies: '',
    age: '',
    phoneNumber: '',
  })

  const [error, setError] = useState(null)

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      await api.post('/signup', state)
      setError(null)
      props.history.push('/')
    } catch (err) {
      console.error(err.response)
      setError(err.response.data.error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="container white-box fadeInDown"
        style={{ maxWidth: '400px' }}
      >
        <h1
          className="signup-tilte d-flex justify-content-center fadeIn"
          style={{ color: 'black', fontSize: '50px' }}
        >
          Cadastrar
        </h1>
        <fieldset style={{ color: 'black' }}>
          <legend className="d-flex justify-content-center fadeIn.second">
            Dados pessoais
          </legend>
          <TextInput
            label="Nome"
            type="text"
            name="name"
            id="signupFormName"
            value={state.name}
            onChange={handleChange}
          />

          <TextInput
            label="Idade"
            type="number"
            name="age"
            id="signupFormAge"
            value={state.age}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset style={{ color: 'black' }}>
          <legend className="d-flex justify-content-center">Geral</legend>
          <TextInput
            label="Ocupação"
            type="text"
            name="occupation"
            id="signupFormOccupation"
            value={state.occupation}
            onChange={handleChange}
          />

          <TextInput
            label="Localização"
            type="text"
            name="location"
            id="signupFormLocation"
            value={state.location}
            onChange={handleChange}
          />

          <TextInput
            label="Certificados/Terapias"
            type="text"
            name="certificatesTerapies"
            id="signupFormCertificatesTerapies"
            value={state.certificatesTerapies}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset style={{ color: 'black' }}>
          <legend className="d-flex justify-content-center">Contato</legend>
          <TextInput
            label="Telefone"
            type="text"
            name="phoneNumber"
            id="signupFormPhoneNumber"
            value={state.phoneNumber}
            onChange={handleChange}
          />

          <TextInput
            label="E-mail"
            type="email"
            name="email"
            id="signupFormEmail"
            value={state.email}
            onChange={handleChange}
          />

          <TextInput
            label="Senha"
            type="password"
            name="password"
            id="signupFormPassword"
            value={state.password}
            onChange={handleChange}
          />

          {error ? <div className="alert alert-danger">{error}</div> : null}

          <div className="d-flex justify-content-center">
            <button className="btn btn-primary" type="submit">
              Enviar!
            </button>
          </div>
        </fieldset>
      </div>
    </form>
  )
}

export default Signup
