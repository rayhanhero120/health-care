import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container">
            <h1 className="text-danger mt-5">Our Services</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4 pt-5">
                {
                    services.map(service =>
                        <Service
                            key={service.id}
                            service={service}
                        >
                        </Service>)
                }
            </div>

        </div>
    );
};

export default Services;