import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:3000/books")
                setBooks(res.data)
                // console.log(res)
            } catch (err) {
                // console.log(err)
            }
        }
        fetchAllBooks()
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:3000/books/" + id)
            window.location.reload()
        } catch (err) {
            // console.log(err)
        }
    }

    return (
        <div className='container'>
            <h1>The Bookshelf</h1>
            <div className="books">
                {books.map((book) => (
                    <div key={book.id} className="book">
                        <img src={book.cover} alt="" />
                        <h2>{book.title}</h2>
                        <h2>{book.author}</h2>
                        <p>{book.desc}</p>
                        <button className="delete" onClick={() => handleDelete(book.id)}>Delete</button>
                        <button className="update">
                            <Link
                                to={`/update/${book.id}`}
                                style={{ color: "inherit", textDecoration: "none" }}
                            >
                                Update
                            </Link>
                        </button>
                    </div>
                ))}
            </div>

            <button className="add-btn">
                <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
                    Add a new book
                </Link>
            </button>
        </div>
    );
}

export default Books;