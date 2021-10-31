import React, { useEffect, useState } from 'react';
import OrderServices from '../OrderServices/OrderServices';

import './Manageorder.css'

const Manageorder = () => {
    const [services,setServices] = useState([])
    useEffect(() => {
        fetch('https://grim-phantom-33520.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        
        <div>
            <h1 className='text-center mt-1'>Manage All Services</h1>
            <div className="service-container container">
            
            {
                services.map(service => <OrderServices
                    key={service._id}
                    service={service}
                >
                </OrderServices>)
            }
            
        </div>
        </div>
    );
};

export default Manageorder;