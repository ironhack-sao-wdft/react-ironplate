import { useState, useEffect } from 'react'
import PostCard from './CardsFeed/PostCard'
import api from '../apis/api'
import SearchPost from './CardsFeed/SearchPost'

function PostFeed() {
  const [input, setInput] = useState('')
  const [posts, setUposts] = useState([])

  //buscando palavras do campo title da postagem
  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await api.get('/allposts')
        const filtered = response.data.filter(
          (el) => el.title.toLowerCase().includes(input.toLowerCase()),
          // ||
          // el.description.toLowerCase().includes(input.toLowerCase()) ||
          // el.terapiesfinding.toLowerCase().includes(input.toLowerCase()),
        )

        setUposts([...filtered])
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
    <>
      <div className="wrapper fadeInDown fadeIn">
        <input
          type="text"
          className="input SearchbackgroundPost fadeIn.first wrapper fadeInDown"
          onChange={handleChange}
          placeholder="Procurar..."
          value={input}
        />
      </div>
      {/* jogando na tela todas postagens já feitas */}
      <div className="row">
        {posts.map((post) => {
          return (
            <>
              <div key={post._id} className="col-12 col-sm-4 col-md-3 ">
                <PostCard post={post} />
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default PostFeed
