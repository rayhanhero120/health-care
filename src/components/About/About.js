import React, { useEffect, useState } from 'react';
import AboutUs from './AboutUs';

const About = () => {
    const [about, setAbout] = useState([])
    useEffect(() => {
        fetch('about.json')
            .then(res => res.json())
            .then(data => setAbout(data))
    }, [])
    return (
        <div className="container">
            <h1 className="text-danger mt-5">About Us</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4 pt-5">
                {
                    about.map(aboutUs =>
                        <AboutUs
                            key={aboutUs.id}
                            aboutUs={aboutUs}
                        >
                        </AboutUs>)
                }
            </div>

        </div>
    );
};

export default About;