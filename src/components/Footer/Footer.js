import React from 'react';
import footer from '../../images/Medicare-eye-clinic-logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-dark">


            <img className="" src={footer} alt="" />

            <div >
                <h3 className="text fs-bold" >© 2021, Medical care about Health . All rights reserved</h3>
            </div>

        </div>
    );
};

export default Footer;