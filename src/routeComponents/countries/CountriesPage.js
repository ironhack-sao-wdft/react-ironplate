import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../apis/api";

import CardInfos from "./CardInfos";

// imagens paises
import alemanha from "../../img/home/alemanha.jpg";
import portugal from "../../img/home/portugal.jpg";
import uk from "../../img/home/uk.jpg";

// imagems menu

import fotoForum from "../../img/misc/forum.jpeg";
import fotoMoradia from "../../img/misc/moradia.jpg";
import fotoEmprego from "../../img/misc/emprego.jpg";

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
      </div>

      <hr className="docHr" />

      <div className="container mt-5 ">
        <div
          className="card mb-3 d-flex cardInfos"
          style={{ maxWidth: "540px" }}
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
          className="card mb-3 d-flex cardInfos"
          style={{ maxWidth: "540px" }}
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

        <div
          className="card mb-3 d-flex cardInfos"
          style={{ maxWidth: "540px" }}
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
      </div>
    </div>
  );
}
