import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import api from '../../apis/api'

import TextInput from '../../components/TextInput'

function CreateCard() {
  const [pin, setPin] = useState('')

  const { accountId } = useParams()
  const history = useHistory()

  function handleChange(event) {
    setPin(event.target.value)
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault()

      const response = await api.put(`/account/${accountId}/create-card`, {
        pin,
      })

      history.push(`/${accountId}/card`)
    } catch (err) {
      console.error(err.response.data)
    }
  }

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Escolha uma senha de 4 dígitos (somente números) para o seu cartão:"
          type="number"
          value={pin}
          min="0"
          onChange={handleChange}
        />

        <div className="form-group">
          <button className="btn btn-primary">Criar cartão</button>
        </div>
      </form>
    </div>
  )
}

export default CreateCard
