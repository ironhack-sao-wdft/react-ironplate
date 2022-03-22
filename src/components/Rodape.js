import {FaFacebook} from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
// import index from "../assets/styles/index.css";
// import { Link } from "react-router-dom";




function Rodape() {
  return (
    <div className="footer">
      <footer className="rodape">
        <p>Todos os direitos reservados</p>
        <a
          href="https://www.facebook.com/jfilhossouza"
          className=" link-icone"
          title="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/filho_souzaa/"
          className=" link-icone"
          title="instagram"
        >
          <BsInstagram />
        </a>
        <a
          href="https://github.com/jfilinho"
          className=" link-icone"
          title="github"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jo%C3%A3o-filho-souza-silva-734773165/"
          className=" link-icone"
          title="linkedin"
        >
          <BsLinkedin />
        </a>
      </footer>
    </div>
  );
};
export default Rodape;
