import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// pagina de informações provisória
export default function Contents() {
  const [state, setState] = useState({
    titulo: "",
    texto1: "",
    texto2: "",
    texto3: "",
    texto4: "",
    texto5: "",
  });

  const { country } = useParams();

  console.log(country);

  useEffect(() => {
    async function fetchPosts() {
      try {
        if (country === "portugal") {
          setState({
            titulo: "Portugal",
            texto1: "Vistos:",
            texto2:
              "Se você pretende vir a Portugal apenas para turismo, não é preciso solicitar um visto. Turistas podem entrar e permanecer no país por até 90 dias, também é possível pedir a extensão do visto de turista, sob algumas condições.Por outro lado, se você pretende vir morar em Portugal, seja por um tempo ou indefinidamente, será preciso pedir um visto, que autoriza a sua entrada no país.Independentemente de qual seja o motivo da sua mudança para Portugal – estudo, trabalho ou aposentadoria, por exemplo – você deve solicitar o visto. Para cada situação há um pedido adequado, explicaremos mais detalhes sobre cada tipo logo a seguir.",
            texto3: "Saiba mais:",
            texto4: "https://www.eurodicas.com.br/visto-para-portugal/",
          });
        }
        if (country === "reinounido") {
          setState({
            titulo: "Reino Unido",
            texto1: "Vistos:",
            texto2:
              "Até o presente momento, brasileiros não necessitam de visto de turismo para ingressar no Reino Unido. Você pode simplesmente comprar suapassagem, fazer sua mala e ir. E você pode fazer isso por incríveis 6 meses!! Mas, isso não quer dizer que você possa fazer alguma coisa além de turistar. Atividades como trabalhar, pedir benefícios, morarpor longos períodos de tempo por meio de visitas frequentes ou sucessivas, casar ou registrar parceria civil ou até mesmo fazer trabalho voluntário, não são permitidas com esse visto. Se o seu interesse vai além do turismo, você pode checar o site oficial do Governo Britânico ",
            texto3: "Saiba mais:",
            texto4:
              "https://www.gov.uk/government/organisations/uk-visas-and-immigration",
          });
        }
        if (country === "alemanha") {
          setState({
            titulo: "Alemanha",
            texto1: "Vistos:",
            texto2:
              "O caminho mais fácil para conseguir um visto para trabalhar na Alemanha é já arrumar um emprego enquanto ainda está no Brasil. Desta forma, a empresa que quer te contratar vai emitir um documento que permite dar entrada no processo de visto no Consulado da Alemanha. Porém, ainda existem outras formas de conseguir o visto para trabalhar e morar na Alemanha, como um visto específico para quem está buscando emprego, que tem validade de até seis meses e pode ser solicitado no Brasil. ",
            texto3: "Saiba mais:",
            texto4:
              "https://www.eurodicas.com.br/vistos-para-trabalhar-na-alemanha/",
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="textDoc allPage">
      <div className="heroImageDoc"></div>

      <hr className="docHr" />

      <Link
        to={`/${country}`}
        style={{ color: "#F7B633", textDecoration: "none" }}
      >
        <i class="fas fa-arrow-left"></i> Voltar
      </Link>
      <div className="container mt-5">
        <h1>{state.titulo}</h1>
        <h3>{state.texto1}</h3>
        <h4>{state.texto2}</h4>
        <hr className="docHr" />
        <h5>{state.texto3}</h5>
        <a href={state.texto4} target="_blank">
          Link aqui.
        </a>
      </div>
    </div>
  );
}
