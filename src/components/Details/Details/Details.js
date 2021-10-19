import React from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { servicesId } = useParams()
    return (
        <div>
            <h2>this is details {servicesId}</h2>
        </div>
    );
};

export default Details;