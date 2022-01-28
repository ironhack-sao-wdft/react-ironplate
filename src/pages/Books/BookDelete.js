import { useEffect } from "react"
import api from '../../apis/api'
import {useParams, useNavigate} from "react-router-dom"

function BookDelete() {
    const { id } =useParams();
    const navigate = useNavigate();
    useEffect(() => {
        async function deleteBook() {
            try {
                await api.delete(`/book/${id}`)
                navigate('/')
            } catch(err) {
                console.error(err)
            }
        }
        deleteBook()
}, [id, navigate])

return <div>Deletando...</div>

}

export default BookDelete