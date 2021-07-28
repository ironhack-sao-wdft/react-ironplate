import { Link } from 'react-router-dom'

import LogoCircle from '../../assets/images/logo-thecircle-removebg.png'
import '../../assets/styles/transp-back.css'

function PostCard(props) {
  return (
    <>
      <section className="postcards">
        <div className="col postcards">
          <div
            className="card h-100  shadow postcards"
            style={{ fontColor: 'white' }}
          >
            <Link to={`/allusers/${props._id}`}>
              <img
                src={LogoCircle}
                alt="The Circle"
                style={{ width: '50px' }}
              />
              Autor{props._id}
            </Link>
            <div className="cardBody m-3">
              <strong>Título:</strong>
              <h6 className="cardTitle" style={{ fontColor: 'white' }}>
                {props.post.title}
              </h6>
              <strong>Descrição:</strong>
              <p className="cardText">{props.post.description}</p>
              <strong>Quero Trocar:</strong>
              <p className="cardText">{props.post.terapiesfinding}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PostCard
