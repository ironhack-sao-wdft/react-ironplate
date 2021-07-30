import { useState } from "react";
import api from "../../apis/api";

import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";

<<<<<<< HEAD
import { useParams } from "react-router-dom";

=======
>>>>>>> 1763716ba128a3379d7708fb1003ec4a2bfc13b4
function AddHabitation() {
  const [state, setState] = useState({
    title: "",
    website: "",
    description: "",
    phone: "",
    photo: "",
    companyEmail: "",
    type: "Apartamento",
    price: "",
    room: "Estúdio",
  });

<<<<<<< HEAD
  const { country } = useParams();

=======
>>>>>>> 1763716ba128a3379d7708fb1003ec4a2bfc13b4
  function handleChange(event) {
    if (event.target.files) {
      return setState({
        ...state,
        [event.currentTarget.name]: event.currentTarget.files[0],
      });
    }

    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }
  async function handleFileUpload(file) {
    const uploadData = new FormData();

    uploadData.append("profilePicture", file);
    console.log(uploadData);
    const response = await api.post("/upload", uploadData);

    return response.data.url;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const uploadImage = await handleFileUpload(state.photo);
<<<<<<< HEAD
      const response = await api.post(`/${country}/moradia`, {
=======
      const response = await api.post("/moradia", {
>>>>>>> 1763716ba128a3379d7708fb1003ec4a2bfc13b4
        ...state,
        photo: uploadImage,
      });
      console.log(response);
      setState({
        title: "",
        website: "",
        description: "",
        phone: "",
        photo: "",
        companyEmail: "",
        type: "",
        price: "",
        room: "",
      });
    } catch (err) {
      console.log(err);
    }
  }
  return (
<<<<<<< HEAD
    <div className="container mt-5">
=======
    <div className="container mt-5 margin-footer">
      <h1 className="">Cadastre o seu imóvel</h1>
>>>>>>> 1763716ba128a3379d7708fb1003ec4a2bfc13b4
      <form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          label="Título:"
          name="title"
          onChange={handleChange}
          value={state.title}
        />

        <TextInput
          type="text"
          label="Website:"
          name="website"
          onChange={handleChange}
          value={state.website}
        />

        <SelectInput
          label="Tipo: "
          name="type"
          onChange={handleChange}
          value={state.type}
          items={["Apartamento", "Casa", "Quarto", "Loja", "Outro"]}
        />

        <SelectInput
          label="Quantidade de quartos: "
          name="room"
          onChange={handleChange}
          value={state.room}
          items={["Estúdio", "1", "2", "3", "4+"]}
        />

        <TextInput
          type="text"
          label="Preço:"
          name="price"
          onChange={handleChange}
          value={state.price}
        />

        <TextInput
          label="Imagem"
          type="file"
          name="photo"
          id="signupFormPhoto"
          onChange={handleChange}
        />

        <TextInput
          type="text"
          label="Telefone:"
          name="phone"
          onChange={handleChange}
          value={state.phone}
        />
        <TextInput
          type="text"
          label="E-mail:"
          name="companyEmail"
          onChange={handleChange}
          value={state.companyEmail}
        />

        <div>
          <label>Descrição</label>
          <textarea
            className="form-control"
            aria-label="Descrição"
            name="description"
            onChange={handleChange}
            value={state.description}
          ></textarea>
        </div>

        <div className="form-group">
<<<<<<< HEAD
          <button className="btn btn-primary mt-3" type="submit">
=======
          <button
            className="btn yellowTaxi mt-3"
            type="submit"
            style={{ color: "white" }}
          >
>>>>>>> 1763716ba128a3379d7708fb1003ec4a2bfc13b4
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddHabitation;
