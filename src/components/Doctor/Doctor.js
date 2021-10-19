import React from 'react';

const Doctor = ({ doctor }) => {
    const { img, description, Name } = doctor
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

export default Doctor;