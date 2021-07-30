import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../apis/api";

import CardInfos from "./CardInfos";

// imagens paises
import alemanha from "../../img/heroImages/alemanha.jpeg";
import portugal from "../../img/heroImages/portugal.jpg";
import uk from "../../img/heroImages/uk.jpeg";

// imagems menu

import fotoForum from "../../img/misc/forum.jpeg";
import fotoMoradia from "../../img/misc/moradia.jpg";
import fotoEmprego from "../../img/misc/emprego.jpg";
import fotoConteudo from "../../img/misc/passaporte.jpeg";

export default function CountriesPage() {
  const { country } = useParams();

  console.log(country);

  let imagemCountry = "";

  if (country === "alemanha") {
    imagemCountry = alemanha;
  }
  if (country === "portugal") {
    imagemCountry = portugal;
  }
  if (country === "reinounido") {
    imagemCountry = uk;
  }

  return (
    <div>
      <div>
        <img src={imagemCountry} className="heroImagePaises" />
        <h2 className="titleHero">{country.toUpperCase()}</h2>
      </div>

      <div className="container allPage">
        <hr className="docHr " />

        <h3 className="mt-5">Destaques:</h3>
        <div className="row mt-5">
          <div
            className="card col mb-3 d-flex cardInfos"
            style={{ maxWidth: "30vw" }}
          >
            <CardInfos
              imagem={fotoForum}
              name="Fórum"
              text="Se tiver alguma dúvida, sugestão ou indicação compartilhe no nosso fórum. Acompanhe e comente!"
            />
            <button className="botaoCountries">
              <Link to={`/${country}/forum`} className="linksTextWhite">
                Clique
              </Link>
            </button>
          </div>

          <div
            className="card col   ml-5 mb-3 d-flex cardInfos"
            style={{ maxWidth: "30vw" }}
          >
            <CardInfos
              imagem={fotoMoradia}
              name="Moradia"
              text="Anúncie para alugar ou pesquise a sua nova casa! "
            />
            <button className="botaoCountries">
              <Link to={`/${country}/moradia`} className="linksTextWhite">
                Clique
              </Link>
            </button>
          </div>
        </div>
        <div className="row">
          <div
            className="card col mt-5 mb-3 d-flex cardInfos"
            style={{ maxWidth: "30vw" }}
          >
            <CardInfos
              imagem={fotoEmprego}
              name="Emprego"
              text="Ofertas de emprego para todas as áreas! Anuncie uma oferta ou pesquise uma nova chance! "
            />
            <button className="botaoCountries">
              <Link to={`/${country}/emprego`} className="linksTextWhite">
                Clique
              </Link>
            </button>
          </div>

          <div
            className="card col  mt-5 ml-5 mb-3 d-flex cardInfos"
            style={{ maxWidth: "30vw" }}
          >
            <CardInfos
              imagem={fotoConteudo}
              name="Informações"
              text="Quer saber mais?
              Todas as informações do país escolhido!"
            />
            <button className="botaoCountries">
              <Link to={`/${country}/conteudo`} className="linksTextWhite">
                Clique
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
