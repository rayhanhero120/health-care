import React, { useEffect, useState } from 'react';
import Homes from './Homes';

const Home = () => {
    const [home, setHome] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setHome(data));
    }, [])
    return (
        <div id="health">
            <h1 className="text-danger mt-5">Health Care</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 pt-5">
                {
                    home.map(homes => <Homes
                        key={homes.id}
                        homes={homes}
                    >
                    </Homes>)
                }
            </div>
        </div>
    );
};

export default Home;