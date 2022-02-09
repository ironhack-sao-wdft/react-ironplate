import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../../apis/api";


function BookEdit(props) {
  const [userData, setUserData] = useState({
    title: "",
    author: "",
    synopsis: "",
    year: "",
    genre: "",
    picture: new File([], ""),
    pictures: "",
  });

  // Loading
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function user() {
      try {
        const response = await api.get(`/book/${id}`);
                  const pictures = await handleFileUpload(userData.picture);
 
        setUserData({ ...userData,
            pictures,
           ...response.data });
      } catch (e) {
        console.log(e);
      }
    }
    user();
  }, [id]);

  function handleChange(e) {
    if (e.target.files) {
      return setUserData({
        ...userData,
        [e.target.name]: e.target.files[0],
      });
    }
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

async function handleFileUpload(file) {
  try {
    const uploadData = new FormData();

    uploadData.append("picture", file);

    const response = await api.post("/upload", uploadData);

    console.log(response);

    return response.data.url;
  } catch (err) {
    console.error(err);
  }
}


  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
            const pictures = await handleFileUpload(userData.picture);

      const response = await api.patch(`/update/${id}`,
       userData,
       pictures
       );

      console.log(response);

      setLoading(false);

      navigate("/");
    } catch (err) {
      setLoading(false);
      console.error(err);
      if (err.response) {
        console.error(err.response);
      }
    }
  }

  return (
    <form>
      Hello
    </form>
  );
}

export default BookEdit;