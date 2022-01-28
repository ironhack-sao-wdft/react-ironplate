import { useState, useEffect } from "react"
import axios from "axios"

import BookCard from "./BookCard"


function BooksList() {
    const [booksList, setBooksList] = useState([]);

    useEffect(() => {
        async function fetchBooks() {
            try {
                const response = await axios.get("http://localhost:4000/api/book")

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