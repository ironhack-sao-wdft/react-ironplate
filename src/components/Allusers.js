import { useState, useEffect } from 'react'
import api from '../apis/api'
import SearchUsers from './UsersFeed/SearchUsers'
import UsersCard from './UsersFeed/UsersCard'

function Allusers() {
  const [input, setInput] = useState('')
  const [users, setUsers] = useState([])

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
    <>
      <div className="fadeInDown fadeIn fadeIn.first">
        <input
          type="text"
          className="input searchUsersbackground fadeInDown"
          onChange={handleChange}
          placeholder="Procurar..."
          value={input}
        />
        <h2 className="fadeIn.second text-center text-white fadeInDown">
          Usuários Cadastrados
        </h2>
        <hr></hr>
      </div>
      <div className="row">
        {users.map((user) => {
          return (
            <>
              <div key={user._id} className="col-12 col-sm-4 col-md-3">
                <UsersCard user={user} />
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default Allusers
