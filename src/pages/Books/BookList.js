import { useState, useEffect } from "react"
import api from "../../apis/api"

import BookCard from "./BookCard"


function BooksList() {
    const [booksList, setBooksList] = useState([]);

    useEffect(() => {
        async function fetchBooks() {
            try {
                const response = await api.get('/book')

                setBooksList([...response.data]);
                
            } catch (err) {
                console.error(err)
            }
        }
        fetchBooks();
    }, [])


    return (
        <div>
            <div className="card">
                {booksList.map((currentBookObj) => <BookCard key={currentBookObj._id} {...currentBookObj} />)}
            
            </div>
        </div>
    )
}

export default BooksList