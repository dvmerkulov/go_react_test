import React from "react";
import { Link } from "react-router-dom";
import Ticket from "./../images/nice_photo.jpeg";

function HomeFunc(props) {
    return (
        <div className="text-center">
        <h2>Find a movie to watch tonight!</h2>
        <hr />
        <Link to="/movies">
        <img className="img-fluid" src={Ticket} alt="movie ticket" />
        </Link>
        </div>
        
    );    
}

export default HomeFunc;