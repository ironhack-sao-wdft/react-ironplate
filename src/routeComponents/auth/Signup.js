import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../apis/api'

import TextInput from '../../components/TextInput'

function Signup(props) {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    profilePicture: '',
    occupation: '',
    location: '',
    certificatesTerapies: '',
    age: '',
    phoneNumber: '',
  })
  const [errors, setErrors] = useState(null)

  function handleChange(event) {
    if (event.target.files) {
      return setState({
        ...state,
        [event.currentTarget.name]: event.currentTarget.files[0],
      })
    }

    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  async function handleFileUpload(file) {
    const uploadData = new FormData()

    uploadData.append('profilePicture', file)

    const response = await api.post('/upload', uploadData)

    return response.data.url
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const {
        street,
        neighbourhood,
        city,
        stateOrProvince,
        postalCode,
        number,
      } = state

      const profilePictureUrl = await handleFileUpload(state.profilePicture)

      const response = await api.post('/signup', {
        ...state,
        address: {
          street,
          neighbourhood,
          city,
          state: stateOrProvince,
          postalCode,
          number,
        },
        profilePictureUrl,
      })
      setError(null)
      props.history.push('/auth/login')
    } catch (err) {
      console.error(err.response)
      setError(err.response.data.error)
    }
  }

  console.log(state)

  return (
    <div className="container mt-5">
      <h1>Cadastre-se</h1>
      <TextInput
        state={state}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
        location={props.location}
      />
    </div>
  )
}

export default Signup
