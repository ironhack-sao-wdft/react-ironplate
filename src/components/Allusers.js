import { useState, useEffect } from 'react'

import api from '../apis/api'
import SearchUsers from './UsersFeed/SearchUsers'
import UsersCard from './UsersFeed/UsersCard'
import '../assets/styles/BackgroundParalax.css'

function Allusers() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await api.get('/allusers')

        console.log(response)

        setUsers([...response.data])
      } catch (err) {
        console.error(err)
      }
    }
    fetchUsers()
  }, [])

  return (
    <>
      <SearchUsers />
      <div className="row">
        {users.map((user) => {
          return (
            <>
              <div
                key={user._id}
                className="col-12 col-sm-4 col-md-5 allusersbackground"
              >
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
