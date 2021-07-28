import { useState, useEffect } from 'react'
import PostCard from './CardsFeed/PostCard'
import api from '../apis/api'
import SearchPost from './CardsFeed/SearchPost'

function PostFeed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await api.get('/allposts')

        console.log(response)

        setPosts([...response.data])
      } catch (err) {
        console.error(err)
      }
    }
    fetchPosts()
  }, [])

  return (
    <>
      <SearchPost />
      <div className="row">
        {posts.map((post) => {
          return (
            <>
              <div
                key={post._id}
                className="col-12 col-sm-4 col-md-5 postfeedbackground"
              >
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
