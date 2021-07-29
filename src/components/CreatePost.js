import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import api from '../apis/api'

import TextInput from '../components/TextInput'

function CreatePost() {
  const [posting, setposting] = useState({
    title: '',
    description: '',
    terapiesfinding: '',
  })
  const history = useHistory()

  function handleChange(event) {
    setposting({ ...posting, [event.target.name]: event.target.value })
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault()

      const response = await api.post('/post', posting)

      history.push('/post')
    } catch (err) {
      console.error(err.response.data)
    }
  }

  return (
    <div
      className="container mt-5"
      style={{ maxWidth: '400px', color: 'white' }}
    >
      <form onSubmit={handleSubmit}>
        <TextInput
          style={{ color: 'white' }}
          label="Digite sua solicitação"
          type="text"
          value={posting.title}
          name="title"
          onChange={handleChange}
        />
        <TextInput
          label="Descreva sua solicitação"
          type="text"
          value={posting.description}
          name="description"
          onChange={handleChange}
        />
        <TextInput
          label="Digite as terapias que busca trocar"
          type="text"
          value={posting.terapiesfinding}
          name="terapiesfinding"
          onChange={handleChange}
        />

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreatePost
