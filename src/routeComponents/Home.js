import React from 'react'
import { Link } from 'react-router-dom'
import LogoCircle from '../assets/images/logosemfundo2.png'

function Home() {
  return (
    <div
      className="text-center backgroundHome  "
      style={{
        padding: '10px',
        color: '#ffffff',
        paddingTop: '20px',
        paddingBottom: '150px',
      }}
    >
      <img
        className="fadeIn fadeIn.first fadeInDown"
        src={LogoCircle}
        alt="The Circle"
        style={{ padding: '50px' }}
      />
      <h1 className="fadeIn fadeIn.second fadeInDown">
        Rede Social The Circle
      </h1>
      <p>Cadastre-se em nossa rede abaixo</p>
      <div className="d-flex flex-column align-items-center">
        <Link className="btn btn-lg btn-primary fadeInDown" to="/signup">
          Cadastre-se!
        </Link>
      </div>
    </div>
  )
}

export default Home
