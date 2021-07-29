 import { useState } from "react";
 import api from "../../apis/api";

 import TextInput from "../../components/TextInput";
 import SelectInput from "../../components/SelectInput";


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
    console.log(uploadData)
    const response = await api.post("/upload", uploadData);

    return response.data.url;
  }

   async function handleSubmit(event) {
     event.preventDefault();
     try {
      const uploadImage = await handleFileUpload(state.photo);
       const response = await api.post("/moradia", {
         ...state,photo: uploadImage,
       });
       console.log(response)
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
     <div className="container mt-5">
       
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
           <button className="btn btn-primary mt-3" type="submit">
             Enviar
           </button>
         </div>
       </form>
     </div>
   );
 }

 export default AddHabitation;
