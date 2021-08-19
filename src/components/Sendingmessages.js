import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import api from '../apis/api'
import TextInput from '../components/TextInput'

function SendingMessages({ location }) {
  const { search } = location
  const userId_received = search.split('=')[1]

  const [messagebody, setMessagebody] = useState('')
  const history = useHistory()

  function handleChange(event) {
    setMessagebody(event.target.value)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const payload = { messagebody, userId_received }
      await api.post('/message', payload)

      history.push('/post')
    } catch (err) {
      console.error(err.response.data)
    }
  }

  return (
    <div
      className="container mt-5 fadeInDown white-box"
      style={{ maxWidth: '400px', color: 'black' }}
    >
      <h2 className="fadeIn text-center">Envie sua Mensagem</h2>
      <form className="fadeIn.second" onSubmit={handleSubmit}>
        <TextInput
          label="Digite sua mensagem"
          type="text"
          value={messagebody}
          name="messagebody"
          onChange={handleChange}
        />

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}

export default SendingMessages
