
import { Link } from "react-router-dom"


function BookCard(props) {


    return (
        <div className="card mb-3" Style="max-width: 540px;">
            <div className="row g-0">
            <div className="col-md-4">
                <img src={props.pictures} className="img-fluid rounded-start" alt={props.name} />
        </div>
        <div className="col-md-8">
        <div className="card-body">
            <div><Link to={`/book/${props._id}`} className="card-title">{props.title}</Link></div>
            <p className="card-text">{props.author}{','} <small className="text-muted">{props.year}</small></p>
        
            <p className="card-text">{props.synopsis}</p>
        
      </div>
      </div>
      </div>
      </div>
        
        
    )

}

export default BookCard