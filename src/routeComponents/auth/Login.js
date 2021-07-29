import '../../assets/styles/index.css'
import '../../assets/styles/transp-back.css'
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import api from '../../apis/api'
import { AuthContext } from '../../contexts/authContext'
import TextInput from '../../components/TextInput'

function Login(props) {
  const authContext = useContext(AuthContext)

  const [state, setState] = useState({ password: '', email: '' })
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
      const response = await api.post('/login', state)
      console.log(response)

      authContext.setLoggedInUser({ ...response.data })
      localStorage.setItem('loggedInUser', JSON.stringify({ ...response.data }))
      setError(null)

      props.history.push('/profile')
    } catch (err) {
      console.log({ err })
      setError(err.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{ maxWidth: '400px', color: 'black' }}
        className="container white-box"
      >
        <h1 className="d-flex justify-content-center mb-5">Login</h1>

        <TextInput
          style={{
            maxWidth: '300px',
          }}
          className="loginbox"
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

        <div className="d-flex justify-content-center mt-5 mb-4">
          <button className="btn btn-primary" type="submit">
            Entrar!
          </button>
        </div>

        <Link className="d-flex justify-content-center" to="/signup">
          Não possui uma conta ainda? Clique aqui para se cadastrar!
        </Link>
      </div>
    </form>
  )
}

export default Login
