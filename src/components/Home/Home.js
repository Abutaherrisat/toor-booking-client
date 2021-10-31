import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Guide from '../Guide/Guide';

import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://grim-phantom-33520.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className="service-container container">
                {
                    services.map((service) => <Service
                        key={service._id}
                        service={service}
                    > </Service>)
                }
            </div>
            <Gallery></Gallery>
            <Guide></Guide>
        </div>





    );
};

export default Home;