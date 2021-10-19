import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('tool.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div id="doctors" className="container">
            <h1 className="text-danger mt-5">Our Doctors</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4 pt-5">
                {
                    doctors.map(doctor =>
                        <Doctor
                            key={doctor.id}
                            doctor={doctor}
                        >
                        </Doctor>)
                }
            </div>

        </div>
    );
};

export default Doctors;