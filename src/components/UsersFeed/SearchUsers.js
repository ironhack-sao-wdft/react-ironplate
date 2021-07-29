import React from 'react'
import '../../assets/styles/transp-back.css'
import { useEffect, useState } from 'react'
import api from '../../apis/api'

function SearchUsers() {
  const [input, setInput] = useState('')
  const [users, setUsers] = useState([])

  //buscando o usuário
  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await api.get('/allusers')
        const filtered = response.data.filter((el) =>
          el.name.toLowerCase().includes(input.toLowerCase()),
        )

        setUsers([...filtered])
      } catch (err) {
        console.error(err.response)
      }
    }
    fetchProfile()
  }, [input])

  function handleChange(event) {
    setInput(event.target.value)
  }
  console.log(users)

  return (
    <div className="">
      <input
        type="text"
        className="input searchUsersbackground"
        onChange={handleChange}
        placeholder="Procurar..."
        value={input}
      />
    </div>
  )
}

export default SearchUsers
