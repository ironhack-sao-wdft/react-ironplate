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
    profilePicture: "",
  })

  const [error, setError] = useState(null)

  function handleChange(event) {

    if (event.target.files) {
      return setState({
        ...state,
        [event.currentTarget.name]: event.currentTarget.files[0],
      });
    }

    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleFileUpload(file) {

    const uploadData = new FormData();

    uploadData.append("profilePicture", file);

    const response = await api.post('/upload', uploadData);

    return response.data.url;
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {

      const profilePictureUrl = await handleFileUpload(state.profilePicture);

      await api.post('/signup', {...state, profilePictureUrl});
      setError(null)
      props.history.push('/login')
    } catch (err) {
      console.error(err.response)
      setError(err.response.data.error)
    }
  }

  console.log(state);

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="container white-box fadeInDown"
        style={{ maxWidth: '400px'}}
      >
        <h1
          className="signup-title d-flex justify-content-center fadeIn"
          style={{ color: 'black', fontSize: '40px' }}
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

          <TextInput
            label="Localização"
            type="text"
            name="location"
            id="signupFormLocation"
            value={state.location}
            onChange={handleChange}
          />

          <TextInput
            label="Foto do perfil"
            type="file"
            name="profilePicture"
            id="signupFormProfilePicture"
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
              Enviar
            </button>
          </div>
        </fieldset>
      </div>
    </form>
  )
}

export default Signup
