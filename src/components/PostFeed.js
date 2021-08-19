import { useState, useEffect } from 'react'
import PostCard from './CardsFeed/PostCard'
import api from '../apis/api'
import SearchPost from './CardsFeed/SearchPost'

function PostFeed() {
  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([])

  //buscando palavras do campo title da postagem
  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await api.get('/allposts')
        const filtered = response.data.filter(
          (el) => el.title.toLowerCase().includes(input.toLowerCase()),
          //so funciona solicitando pelo campo title
          // ||
          // el.description.toLowerCase().includes(input.toLowerCase()) ||
          // el.terapiesfinding.toLowerCase().includes(input.toLowerCase()),
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
    <>
      <div className="">
        <input
          type="text"
          className="input SearchbackgroundPost"
          onChange={handleChange}
          placeholder="Procurar..."
          value={input}
        />
      </div>
      <h2 className="fadeIn.second text-center text-white fadeInDown">
        Pedidos de Trocas
      </h2>
      <hr></hr>
      {/* jogando na tela todas postagens já feitas */}
      <div className="row">
        {posts.map((post) => {
          return (
            <>
              <div key={post._id} className="col-12  col-sm-4 col-md-3 ">
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
