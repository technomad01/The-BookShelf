import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';



const Update = () => {
    const [book, setBook] = useState({
        title: "",
        desc: "",
        cover: "",
        author: "",
    });

    const navigate = useNavigate()
    const location = useLocation()

    const bookId = location.pathname.split('/')[2];

    const handleChange = (e) => {
        setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.put("http://localhost:8080/books/" + bookId, book)
            navigate("/")
        } catch (err) {
            // (console.log(err))
        }
    }

    console.log(book);
    return (
        <div className="form">
            <h1>Update Book </h1>
            <input
                type="text"
                placeholder="title"
                onChange={handleChange}
                name="title"
            />
            <input
                type="text"
                placeholder="desc"
                onChange={handleChange}
                name="desc"
            />
            <input
                type="text"
                placeholder="cover"
                onChange={handleChange}
                name="cover"
            />
            <input
                type="text"
                placeholder="name"
                onChange={handleChange}
                name="author"
            />

            <button className="formButton" onClick={handleClick}>Update</button>

            <Link to="/"><button className="home-btn">Home</button></Link>

        </div>
    );
};

export default Update;
