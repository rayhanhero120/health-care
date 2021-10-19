import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, img, description, Name } = service
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{Name}</h3>
                    <p className="card-text">{description} </p>

                    <Link to={`/details/${id}`}>
                        <button className="btn btn-primary">{Name.toLowerCase()}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;