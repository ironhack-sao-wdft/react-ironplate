import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import api from "../../apis/api";
import FormField from "../../components/forms/FormField";

function EditPost(props) {
  const [userData, setUserData] = useState({
    nickName: "",
    idade: "",
    estado: "",
    cidade: "",
    descricao: "",
  });

  // Loading
  const [loading, setLoading] = useState(false);

  const { id } = useParams(props);

  const navigate = useNavigate();

  useEffect(() => {
    async function user() {
      try {
        const response = await api.get(`/detalhe-post/${id}`);

        setUserData({ ...userData, ...response.data });
      } catch (e) {
        console.log(e);
      }
    }
    user();
  }, [id]);

  function handleChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.patch(`/atualiza-post/${id}`, userData);

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
    <div className="w-50 d-flex flex-column m-auto">
      <h1 className="text-center mt-5 mb-4">Editar cadastro</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="NickName"
          id="sobrenome"
          required
          name="nickName"
          onChange={handleChange}
          value={userData.nickName}
          readOnly={loading}
        />

        <FormField
          type="text"
          label="Idade"
          id="idade"
          required
          name="idade"
          onChange={handleChange}
          value={userData.idade}
          readOnly={loading}
        />

        <FormField
          type="text"
          label="Estado"
          id="estado"
          required
          name="estado"
          onChange={handleChange}
          value={userData.estado}
          readOnly={loading}
        />

        <FormField
          type="text"
          label="Cidade"
          id="cidade"
          required
          name="cidade"
          onChange={handleChange}
          value={userData.cidade}
          readOnly={loading}
        />
        <FormField
          type="textarea"
          label="Descricao"
          id="cidade"
          required
          name="descricao"
          onChange={handleChange}
          value={userData.descricao}
          readOnly={loading}
        />
        <div className="mb-3 text-end">
          <button disabled={loading} type="submit" className="btn btn-primary">
            {loading ? (
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
            ) : null}
            AtualizarPost
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditPost;
