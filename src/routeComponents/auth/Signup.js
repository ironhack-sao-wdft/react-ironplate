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
  const [errors, setErrors] = useState(null)

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const response = await api.post('/signup', state)
      setErrors('')
      props.history.push('/auth/login')
    } catch (err) {
      console.error(err.response)
      setErrors({ ...err.response.data.errors })
    }
  }

  console.log(state)

  return (
    <div className="container mt-5">
      <form onSubmit={props.handleSubmit}>
        <h1>Cadastre-se</h1>
        <fieldset className="form-group">
          <legend>Básico</legend>
          <TextInput
            label="Name"
            type="text"
            name="name"
            id="signupFormName"
            value={props.state.name}
            onChange={props.handleChange}
          />

          <TextInput
            label="E-mail"
            type="email"
            name="email"
            id="signupFormEmail"
            value={props.state.email}
            onChange={props.handleChange}
          />

          {props.location.pathname === '/auth/signup' ? (
            <TextInput
              label="Senha"
              type="password"
              name="password"
              id="signupFormPassword"
              value={props.state.password}
              onChange={props.handleChange}
            />
          ) : null}

          <TextInput
            label="Foto de perfil"
            type="file"
            name="profilePicture"
            id="signupFormProfilePicture"
            onChange={props.handleChange}
          />
        </fieldset>

        <fieldset className="form-group">
          <legend>Informações pessoais</legend>
          <TextInput
            label="Profissão"
            type="text"
            name="occupation"
            id="signupFormOccupation"
            value={props.state.occupation}
            onChange={props.handleChange}
          />

          <TextInput
            label="Localidade"
            type="text"
            name="location"
            id="signupFormLocation"
            value={props.state.location}
            onChange={props.handleChange}
          />

          <TextInput
            label="Certificados e Terapias"
            type="text"
            name="certificatesTerapies"
            id="signupFormTerapies"
            value={props.state.certificatesTerapies}
            onChange={props.handleChange}
          />

          <TextInput
            label="Idade"
            type="text"
            name="age"
            id="signupFormAge"
            value={props.state.age}
            onChange={props.handleChange}
          />

          <TextInput
            label="Número de telefone"
            type="text"
            name="phoneNumber"
            id="signupFormphoneNumber"
            value={props.state.phoneNumber}
            onChange={props.handleChange}
          />
        </fieldset>

        {props.error ? (
          <div className="alert alert-danger">{props.error}</div>
        ) : null}

        <div className="form-group">
          <button className="btn btn-primary" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}

export default Signup
