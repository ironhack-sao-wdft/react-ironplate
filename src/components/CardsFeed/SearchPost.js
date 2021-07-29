import React from 'react'
import '../../assets/styles/transp-back.css'
import { useEffect, useState } from 'react'
import api from '../../apis/api'

function SearchPost() {
  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await api.get('/allposts')
        const filtered = response.data.filter(
          (el) => el.title.toLowerCase().includes(input.toLowerCase()),
          // ||
          // el.description.toLowerCase().includes(input.toLowerCase()) ||
          // el.terapiesfinding.toLowerCase().includes(input.toLowerCase())
        )

        setPosts([...filtered])
      } catch (err) {
        console.error(err.response)
      }
    }
    fetchProfile()
  }, [input])

  function handleChange(event) {
    setInput(event.target.value)
  }
  console.log(posts)

  return (
    <div className="">
      <input
        type="text"
        className="input SearchbackgroundPost"
        onChange={handleChange}
        placeholder="Procurar..."
        value={input}
      />
    </div>
  )
}

export default SearchPost
