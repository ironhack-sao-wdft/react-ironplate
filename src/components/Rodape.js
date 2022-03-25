import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

function Rodape() {
  return (
    <footer className="footer">
      <div className="footer__social">
        <a
          href="https://www.linkedin.com/in/jo%C3%A3o-filho-souza-wd-fullstack/"
          className=" link-icone"
          title="linkedin"
        >
          <BsLinkedin size="30" color="#fff" />
        </a>
        <a
          href="https://github.com/jfilinho"
          className=" link-icone"
          title="github"
        >
          <AiFillGithub size="30" color="#fff" />
        </a>

        <a href="https://www.instagram.com/filho_souzaa"
         className=" link-icone
        " title="instagram">
          <FaInstagram size="30" color="#fff" />
        </a>

        <a
          href="https://www.facebook.com/jfilhossouza"
          className=" link-icone"
          title="Facebook"
        >
          <FaFacebook size="30" color="#fff" />
        </a>
      </div>
      <p className="footer__copyright">
        &copy; Copyright 2022 - Desenvolvido por - João Filho
      </p>
    </footer>
  );
}
export default Rodape;
