import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'
import api from "../../apis/api"


import ConfirmationModal from '../../components/ConfirmationModal';

function BookDetail () {

    const [bookDetails, setBookDetails] = useState({
        title: '',
        author: '',
        synopsis: '',
        year: 0,
        genre: '',
        pictures: '',
        picture: new File ([], ''),

    });

    const [showModal, setShowModal] = useState(false)

    const { id } = useParams()

    const navigate = useNavigate()

    useEffect (() => {
        async function fetchBook() {
            try {
                const response = await api.get(`/book/${id}`)
            
                setBookDetails({...response.data})
            } catch(err) {
                console.error(err)
            }
        }
        fetchBook()
    }, [id])

    return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <div className="img-fluid">
                <img className="img-detail" src={bookDetails.pictures} alt={bookDetails.title} />
                </div>
            </div>
            <div >
                    <Link
                    to={`/update/${id}`}
                    type="button"
                    className="btn btn-link  btn-warning mr-3"
                >
                    Editar
                </Link>
                <button className="btn btn-danger me-2" onClick={() => setShowModal(true)}>
                    Deletar
                </button>
            </div>

            <p><strong>Titulo do livro</strong>{bookDetails.title}</p>
            <p><strong>Autor</strong>{bookDetails.author}</p>
            <p><strong>Sinopse</strong>{bookDetails.synopsis}</p>
            <p><strong>Ano de lançamento</strong>{bookDetails.year}</p>
            <p><strong>Genero</strong>{bookDetails.genre}</p>
            <p><strong>Capa</strong>{bookDetails.pictures}</p>

        <ConfirmationModal 
        title="Tem certeza?" 
        variant="danger" 
        ConfirmationText="deletar" 
        show={showModal} 
        handleClose={() => setShowModal(false)}
        handleConfirmation={() => {navigate(`/book/delete/${id}`);
        setShowModal(false)
    }}
        >
            Esta alteração é irreversível
        </ConfirmationModal>

        </div>
    )
}

export default BookDetail