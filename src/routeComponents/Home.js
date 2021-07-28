import React from 'react'
import { Link } from 'react-router-dom'
import LogoCircle from '../assets/images/logo sem fundo.png'
import '../assets/styles/BackgroundParalax.css'

function Home() {
  return (
    <div className="text-center backgroundHome" style={{ color: '#ffffff' }}>
      <img src={LogoCircle} alt="The Circle" />
      <h1>Rede Social The Circle</h1>
      <p>This is the homepage</p>
      <div className="d-flex flex-column align-items-center">
        <Link className="btn btn-lg btn-primary" to="/auth/signup">
          Signup here!
        </Link>
      </div>
    </div>
  )
}

export default Home
