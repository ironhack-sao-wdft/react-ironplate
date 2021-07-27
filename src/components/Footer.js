import { Link } from "react-router-dom";


function Footer () {
    return (
        <div className="primary text-white pt-3 pb-2" >

            <div className="container text-center text-md-left ">

                <div className="row text-center text-md-left">

                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-4 text-center">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-white">Sobre a TRIPPERS</h5>
                        <p>A comunidade TRIPPERS tem como intuito oferecer a troca de informações entre viajantes, a fim de proporcinoar a melhor experiência para todos com o menor custo possível.</p>
                    </div>

                    <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mt-4 text-center">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-white">Links úteis</h5>
                        <p>
                            <Link to="#" className="text-white" style={{textDecoration: "none"}}>Sua Conta</Link>
                        </p>
                        <p>
                            <Link to="#" className="text-white" style={{textDecoration: "none"}}>Trabalhe conosco</Link>
                        </p>
                        <p>
                            <Link to="#" className="text-white" style={{textDecoration: "none"}}>Sugestões</Link>
                        </p>
                        <p>
                            <Link to="#" className="text-white" style={{textDecoration: "none"}}>Ajuda</Link>
                        </p>
                    </div>
                    
                </div>

                <hr className="mb-4"/>

                <div className="d-flex justify-content-center">

                    <ul className="list-unstyled list-inline ">

                        <li className="list-inline-item">
                            <Link to="#" className="btn-floating btn-sm text-white" style={{fontSize: "23px"}}><i className="fab fa-facebook"></i></Link>
                        </li>

                        <li className="list-inline-item">
                            <Link to="#" className="btn-floating btn-sm text-white" style={{fontSize: "23px"}}><i className="fab fa-twitter"></i></Link>
                        </li>

                        <li className="list-inline-item">
                            <Link to="#" className="btn-floating btn-sm text-white" style={{fontSize: "23px"}}><i className="fab fa-instagram"></i></Link>
                        </li>

                    </ul>

                </div>

            </div>
	
        </div>

    )
}

export default Footer;
