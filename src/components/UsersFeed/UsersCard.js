import { Link } from 'react-router-dom'

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
            <div style={{display: 'flex', justifyContent:'center', padding:'10px'}}>
            <img
             className="img-fluid rounded-circle"
             src={props.user.profilePictureUrl}
             alt="Sua foto de perfil"
             style={{marginBottom: '15px'}}
            />
            </div>
            </Link>
            <div className="cardBody m-3">
              <strong>Nome:</strong>
              <h6 className="cardTitle">{props.user.name}</h6>
              <strong>Email:</strong>
              <p className="cardText">{props.user.email}</p>
              <strong>Terapias Certificados:</strong>
              <p className="cardText">{props.user.certificatesTerapies}</p>
              <div style={{display: 'flex', justifyContent: 'center'}}>
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
