import api from "../apis/api";
import React, { useEffect , useState} from "react";
import { Link } from "react-router-dom";


function Home() {
  const [userData, setUserData] = useState({name: "", email: "", books: []})

  useEffect(() => {
    async function fetchUser(){
      try{

        const response = await api.get('/profile')

        console.log(response)

        setUserData({...response.data});

      } catch(err) {
        console.error(err)
      }
    }
    fetchUser()
  }, [])

  return (
    <div className="text-center">
      
      <h1>React IronPlate</h1>
      <p>This is the homepage</p>
      <div className="d-flex flex-column align-items-center">
        <Link className="btn btn-lg btn-primary" to="/auth/signup">
          Signup here!
        </Link>
      </div>
    </div>
  );
}

export default Home;
