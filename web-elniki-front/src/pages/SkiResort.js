import React from 'react';

import './SkiResort.css';
import skier from './../img/skierw.svg'; 


const SkiResort = () => {
    return (
        <div className="resort-container">
            <div className="background-block blue-block"></div>
            <div className="background-block white-block"></div>
            <div className="background-block red-block"></div>
            <div className="image-container">
                <img src={skier} className="Large-img" />
            </div>
            <a href="/abouttheresort" className="button resort-button">О курорте</a>

            <div className="background-block blue-block2"></div>
        </div>
        
    );
};

export default SkiResort;
