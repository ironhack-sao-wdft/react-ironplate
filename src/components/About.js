import React from 'react'
import { Link } from 'react-router-dom'
import LogoCircle from '../assets/images/logo sem fundo.png'
import background from '../assets/images/backparticles.jpg'
import '../assets/styles/About.css'
function About() {
  return (
    <div className="headerPost fadeInDown">
      <img
        className="card-img-top fadeIn fadeIn.first fadeInDown logoimg container"
        src={LogoCircle}
        alt="The Circle"
        style={{ padding: '0px', width: '420px', height: 'auto' }}
      />
      <h1> Rede Social The Circle</h1>
      <div className="card-group fadeInDown">
        <div className="card headerPost">
          <div className="card-body">
            <h5 className="card-title">Nossa Missão</h5>
            <p className="card-text">
              Decidimos criar uma rede social, onde pessoas, terapeutas e afins,
              possam realizar suas trocas de terapias ou serviços. Afim de que
              troquem suas experiências, terapias e outras habilidades,
              contribuindo uns com os outros. Desta forma decidimos, em um
              espaço virtual, criar um "círculo" de pessoas que estejam
              dispostas em oferecer suas habilidades, mas também receber de
              outros. Podemos então criar assim, um "círculo" de pessoas
              realizando, criando e socializando suas habilidades para o bem
              maior.
            </p>
          </div>
        </div>
        <div className="card headerPost">
          <div className="card-body">
            <h5 className="card-title">Ajuda mútua</h5>
            <p className="card-text">
              Nosso objetivo é a ajuda mútua, seja de terapeutas recém-formados
              ou mais experientes, para que possam trocar suas experiências e
              habilidades como profissionais. "The Circle" surgiu da idéia de
              dois desenvolvedores, capacitados em enriquecer e contribuir ainda
              mais com as redes sociais, utilizando a mesma da melhor forma de
              ajuda mútua.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
