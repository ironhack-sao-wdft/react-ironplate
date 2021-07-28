// import { useState } from "react";
// import api from "../../apis/api";

// import TextInput from "../../components/TextInput";
// import SelectInput from "../../components/SelectInput";
// import axios from "axios";

// function CreatePostMoradia() {
//   const [state, setState] = useState({
//     title: "",
//     website: "",
//     description: "",
//     phone: "",
//     photo: "",
//     companyEmail: "",
//     type: "",
//     price: "",
//     room: "",
//   });

//   function handleChange(event) {
//     setState({ ...state, [event.target.name]: event.target.value });
//   }

//   async function handleSubmit(event) {
//     event.preventDefault();
//     try {
//       const response = await api.post("/moradia", {
//         ...state,
//       });
//       setState({
//         title: "",
//         website: "",
//         description: "",
//         phone: "",
//         photo: "",
//         companyEmail: "",
//         type: "",
//         price: "",
//         room: "",
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   return (
//     <div className="container mt-5">
//       <form onSubmit={handleSubmit}>
//         <TextInput
//           type="text"
//           label="Título:"
//           name="title"
//           onChange={handleChange}
//           value={state.title}
//         />

//         <TextInput
//           type="text"
//           label="Website:"
//           name="title"
//           onChange={handleChange}
//           value={state.website}
//         />

//         <SelectInput
//           label="Tipo: "
//           name="title"
//           onChange={handleChange}
//           value={state.type}
//           items={["Apartamento", "Casa", "Quarto", "Loja", "Outro"]}
//         />

//         <SelectInput
//           label="Quantidade de quartos: "
//           name="room"
//           onChange={handleChange}
//           value={state.room}
//           items={["Estúdio", "1", "2", "3", "4+"]}
//         />

//         <TextInput
//           type="text"
//           label="Preço:"
//           name="title"
//           onChange={handleChange}
//           value={state.price}
//         />

//         <TextInput
//           type="text"
//           label="Url Imagem:"
//           name="Fotos"
//           onChange={handleChange}
//           value={state.photo}
//         />

//         <TextInput
//           type="text"
//           label="Telefone:"
//           name="phone"
//           onChange={handleChange}
//           value={state.phone}
//         />
//         <TextInput
//           type="text"
//           label="E-mail:"
//           name="companyEmail"
//           onChange={handleChange}
//           value={state.companyEmail}
//         />

//         <div>
//           <label>Descrição</label>
//           <textarea
//             className="form-control"
//             aria-label="Descrição"
//             name="description"
//             onChange={handleChange}
//             value={state.description}
//           ></textarea>
//         </div>

//         <div className="form-group">
//           <button className="btn btn-primary mt-3" type="submit">
//             Enviar
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default CreatePostMoradia;
