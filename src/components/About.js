import React from 'react'
import { Link } from 'react-router-dom'
import LogoCircle from '../assets/images/logo sem fundo.png'
import background from '../assets/images/backparticles.jpg'
import '../assets/styles/About.css'
function About() {
  return (
    <>
      <section className="headerPost fadeInDown fadeIn">
        <section>
          <h1 className="text-left fadeIn.first fadeInDown">Sobre nós</h1>
        </section>
        <hr />

        <section className="contaniner m-5 fadeInDown">
          <h1 className="text-center">Nossa Missão</h1>
          <p className="text-center">
            Decidimos criar uma rede social, onde pessoas, terapeutas e afins,
            possam realizar suas trocas de terapias ou serviços. Afim de que
            troquem suas experiências, terapias e outras habilidades,
            contribuindo uns com os outros. Desta forma decidimos, em um espaço
            virtual, criar um "círculo" de pessoas que estejam dispostas em
            oferecer suas habilidades, mas também receber de outros. Podemos
            então criar assim, um "círculo" de pessoas realizando, criando e
            socializando suas habilidades para o bem maior.
          </p>
        </section>

        <hr />
        <section className="contaniner m-5 fadeIn.second fadeInDown">
          <h1 className="text-center">Ajuda mútua</h1>
          <p className="text-center">
            Nosso objetivo é a ajuda mútua, seja de terapeutas recém-formados ou
            mais experientes, para que possam trocar suas experiências e
            habilidades como profissionais. "The Circle" surgiu da idéia de dois
            desenvolvedores, capacitados em enriquecer e contribuir ainda mais
            com as redes sociais, utilizando a mesma da melhor forma de ajuda
            mútua.
          </p>
        </section>
      </section>
    </>
  )
}

export default About
