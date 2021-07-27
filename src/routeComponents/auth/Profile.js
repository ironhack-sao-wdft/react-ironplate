import {Link} from "react-router-dom";
import {userState, useEffect, useState} from "react";
import api from "../../apis/api";

function Profile() {
    const [state,setState] = useState({
        name:"",
        lastName:"",
        email:"",
        profilePictureUrl:"",
        posts:"",
    });
    const [posts, setAccounts] = useState([]);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await api.get("/profile");

        setState({ ...response.data });

        const postsResponse = await api.get("/posts");

        if (postsResponse.data.length) {
          setAccounts([...postsResponse.data]);
        }
      } catch (err) {
        console.error(err);
      }
    }
fetchProfile();
  }, []);

  return (
    <div className="container mt-5">
      <Link className="btn btn-primary" to="/profile/edit">
        Editar Perfil
      </Link>

      <h1>Perfil</h1>
      <hr />

      <img
        className="img-fluid rounded-circle"
        src={state.profilePictureUrl}
        alt="Sua foto de perfil"
      />

      <p>
        <strong>Nome: </strong>
        {state.name}
      </p>
      <p>
        <strong>lastName: </strong>
        {state.lastName}
      </p>
      <p>
        <strong>E-mail: </strong>
        {state.email}
      </p>
      <p>
        <strong>posts: </strong>
        {state.posts}
      </p>
      </div>
} 