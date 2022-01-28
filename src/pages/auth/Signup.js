import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import api from '../../apis/api'


function Signup(props) {
  const [state, setState] = useState({ name: "", password: "", email: "" });
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    password: null,
  });

  //Loading
  const [loading, setLoading] = useState(false)
  

  const navigate = useNavigate();

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (state.password !== state.confirmPassword) {
      return alert ('Senha e confirmação não correspodem.')
    }

    try {

      setLoading(true)

      const response = await api.post('/signup', state);    
      setErrors({ name: "", password: "", email: "" });
      navigate("/login");
      setLoading(false)
      console.log(response)
    } catch (err) {
      if (err.response) {
        console.error(err.response);
        setLoading(false)
        return setErrors({ ...err.response.data.errors });
      }

      console.error(err);
    }
  }

  return (
    
    <form onSubmit={handleSubmit} className="container" >
      <h1>Signup!</h1>
      
      <div className="form-label">
        <label htmlFor="signupFormName" className="form-label"> Name</label>
        <input
          className="form-control"
          type="text"
          name="name"
          id="signupFormName"
          required 
          value={state.name}
          error={errors.name}
          onChange={handleChange}
          readOnly={loading}
          aria-describedby="emailHelp"
        />
      </div>

      <div className="form-label">
        <label htmlFor="signupFormEmail">E-mail Address</label>
        <input
          className="form-control"
          type="email"
          name="email"
          id="signupFormEmail"
          required 
          value={state.email}
          error={errors.email}
          onChange={handleChange}
          readOnly={loading}
        />
      </div>

      <div className="form-label">
        <label htmlFor="signupFormPassword" className="form-label">Password</label>
        <input
          className="form-control"
          type="password"
          name="password"
          id="signupFormPassword"
          required 
          value={state.password}
          error={errors.password}
          onChange={handleChange}
          readOnly={loading}
          //pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"

        />
      </div>

      <div className="form-label">
        <label htmlFor="signupFormConfirmPassword" className="form-label">Confirm Password</label>
        <input
        className="form-control"
        type="password"
        label="confirme sua senha" 
        id="signupFormConfirmPassword" 
        required 
        name="confirmPassword" 
        onChange={handleChange} 
        error={errors.confirmPassword}
        value={state.confirmPassword}
        readOnly={loading}

        />
      </div>
      <br></br>
      <div>
        <button disabled={loading} type="submit" className="btn btn-primary">
        {loading ? <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> :null}
        Signup! </button> 
        <br></br>
        <Link to="/login">Already have an account? Click here to login.</Link>
      </div>
    </form>
    
  );
}

export default Signup; 


//import FormField from '../../components/form/FormField'

/*function Signup() {

  const[userData, setUserData] = useState({ name: '', email: '', password: '' })

  function handleChange(e) {
    setUserData({[e.target.name]: e.target.value})
  }

  return <div>
    <h1>Cadastre-se</h1>

    <form>
      <FormField 
      label="Nome completo" 
      id="signupFormName" 
      required 
      name="name" 
      onChange={handleChange} 
      value={userData.name}
      />

<FormField 
      type="email"
      label="E-mail" 
      id="signupFormEmail" 
      required 
      name="email" 
      onChange={handleChange} 
      value={userData.email}
      />

<FormField 
      type="password"
      label="confirme sua senha" 
      id="signupFormConfirmPassword" 
      required 
      name="ConfirmPassword" 
      onChange={handleChange} 
      value={userData.confirmPassword}
      />

      <div className="mb-3">
        <button type="submit" className="btn btn-primary">Cadastrar</button>
      </div>

    </form>
  </div>
}

export default Signup; */