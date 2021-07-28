import React from 'react'
import { Link } from 'react-router-dom'
import LogoCircle from '../assets/images/logosemfundo2.png'

function Home() {
  return (
    <div
      className="text-center backgroundHome"
      style={{
        padding: '10px',
        color: '#ffffff',
        paddingTop: '50px',
        paddingBottom: '150px',
      }}
    >
      <img src={LogoCircle} alt="The Circle" style={{ padding: '50px' }} />
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
