import React from 'react';

import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-container">
            <main style={{ height: "600px" }} className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <h1 style={{ color: "lightgoldenrodyellow" }}>
                       <h1>ADVENTURE IS WORTWHILE</h1>
                    </h1>
                    <h3 className="text-color">
                       DISCOVER NEW PLACES WITH US,ADVENTURE AWAITS
                    </h3>
                   
                </div>
            </main>


        </div>
    );
};

export default Banner;