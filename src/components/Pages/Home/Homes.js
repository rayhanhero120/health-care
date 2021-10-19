import React from 'react';

const Homes = ({ homes }) => {
    const { img, description, Name } = homes
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{Name}</h3>
                    <p className="card-text">{description} </p>
                </div>
            </div>
        </div>
    );
};

export default Homes;