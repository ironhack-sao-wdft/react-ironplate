import { Link } from 'react-router-dom'

import '../../assets/styles/transp-back.css'

function PostCard(props) {
  return (
    <>
      <section className="postcardsbox fadeInDown fadeIn">
        <div
          className="col postcards"
          style={{
            padding: '0px',
            margin: '10px',
            borderRadius: '50px 50px 50px 50px',
          }}
        >
          <div className="card h-100  postcards fadeIn.first fadeInDown">
            <Link to={`/allusers/${props._id}`}>
            <div style={{display: 'flex', justifyContent:'center', padding:'10px'}}>
            <img
             className="img-fluid rounded-circle"
             src={props.post.profilePictureUrl}
             alt="Sua foto de perfil"
             style={{marginBottom: '15px'}}
            />
            </div>    
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
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <Link
                  type="submit"
                  className="btn btn-outline-primary text-align-center fadeIn.second"
                  to={`/message/?id=${props.post.userId}`}
                  style={{
                    height: '25px',
                    width: '110px',
                    paddingBottom: '10px',
                    paddingTop: '0px',
                  }}
                >
                  Responder
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PostCard
