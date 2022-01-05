import { useState, useEffect } from "react";
import CardPost from "./CardPost";
import api from "../../apis/api";
import "../../assets/styles/postlist.css";

function PostList() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await api.get("/lista-post");

        setPostList([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchPost();
  }, []);

  return (
    <div className="postdiv">
      {postList.map((postObj) => (
        <CardPost key={postObj._id} {...postObj} />
      ))}
    </div>
  );
}
export default PostList;
