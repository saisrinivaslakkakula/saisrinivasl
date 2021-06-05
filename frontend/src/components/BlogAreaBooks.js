import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
const BlogAreaBooks = ({ bookName, BookImage }) => {
    return (
        <div>
            <Link to={"/blog-details"}>
                <a className="thumb">
                    <img className="fullimage cover" style={{ height: '250px' }} alt="Book Image" src={BookImage} role="img"></img>
                </a>
            </Link>
            <div className="info">
                <p style={{ marginTop: '1rem' }}>
                    <Link to={"/blog-details"}>
                        {bookName}
                    </Link>
                </p>
                <p>
                    <ReactStars count={5} value={4.5} isHalf size={24} activeColor="#ffd700" />
                15 Reviews
                </p>

            </div>
        </div>
    )
}

export default BlogAreaBooks
