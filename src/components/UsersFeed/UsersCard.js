import { Link } from 'react-router-dom'

import LogoCircle from '../../assets/images/logo-thecircle-removebg.png'
import '../../assets/styles/transp-back.css'

function UsersCard(props) {
  return (
    <>
      <section className="userscard fadeInDown fadeIn">
        <div
          style={{ padding: '0px', margin: '10px' }}
          className="col userscard "
        >
          <div className="card h-100  shadow userscard fadeIn.first fadeInDown">
            <Link to={`/usersall/${props._id}`}>
              <img
                src={LogoCircle}
                style={{ width: '50px' }}
                alt="The Circle"
              />
              {props.user.name}
            </Link>
            <div className="cardBody m-3">
              <strong>Nome:</strong>
              <h6 className="cardTitle">{props.user.name}</h6>
              <strong>Email:</strong>
              <p className="cardText">{props.user.email}</p>
              <strong>Terapias Certificados:</strong>
              <p className="cardText">{props.user.certificatesTerapies}</p>
              <div>
                <Link
                  type="submit"
                  className="btn btn-outline-primary text-align-center fadeIn.second"
                  to={`/message/?id=${props.user._id}`}
                  style={{
                    height: '25px',
                    width: '110px',
                    paddingBottom: '10px',
                    paddingTop: '0px',
                  }}
                >
                  Mensagem
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default UsersCard
