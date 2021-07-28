import { Link } from 'react-router-dom'

import LogoCircle from '../../assets/images/logo-thecircle-removebg.png'
import '../../assets/styles/transp-back.css'

function UsersCard(props) {
  return (
    <>
      <section className="userscard">
        <div className="col userscard">
          <div className="card h-100  shadow userscard">
            <Link to={`/usersall/${props._id}`}>
              <img
                src={LogoCircle}
                style={{ width: '50px' }}
                alt="The Circle"
              />
              Autor
            </Link>
            <div className="cardBody m-3">
              <strong>Nome:</strong>
              <h6 className="cardTitle">{props.user.name}</h6>
              <strong>Email:</strong>
              <p className="cardText">{props.user.email}</p>
              <strong>Terapias Certificados:</strong>
              <p className="cardText">{props.user.certificatesTerapies}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default UsersCard
