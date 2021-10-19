import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <img className="img" src={notfound} alt="" />
            <br />
            <Link to="/"><button className="btn-back">Go Back</button></Link>
        </div>
    );
};

export default NotFound;