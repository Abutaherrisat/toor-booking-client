
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";
import './Booking.css'
const Booking = () => {
    const { serviceId } = useParams()
    const [service, setService] = useState({});
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://grim-phantom-33520.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])
    // const handleClick = () => {
    //     const email = user.email;
    //     const newOrder = {
    //         email: email,
    //         order: service
    //     }
    //     fetch(`https://grim-phantom-33520.herokuapp.com/addOrder`, {
    //         method: 'post',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(newOrder)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);

    //         })
    //     console.log(email);
    // }
    const { register, handleSubmit, reset } = useForm();
    const history = useHistory();
    const onSubmit = (data) => {
        const newOrder = {
            email: user.email,
            order: service,
            billingInfo: data
        }
        console.log(newOrder);

        fetch(`https://grim-phantom-33520.herokuapp.com/addOrder`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                history.push('/myorder')
            })
    };
    return (
        <div className="row">
            <div className='d-flex justify-content-center col-md-6'>
                <div className="service-style ">
                    <div className="">
                        <img className="img-style" src={service.img} alt="" />
                    </div>
                    <div className="card-body">
                        <h2><i class="fas fa-map-marker-alt location"></i> {service.firstName}</h2>
                        <p>{service.description}</p>
                        <p>{service.price} <i class="fas fa-dollar-sign"></i></p>
                    </div>
                </div>
            </div>
            <div className="add-order col-md-6">
                <div>
                    <h3>Biiling info</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name")} placeholder="name" />
                        <input {...register("address")} placeholder="adress" />
                        <button id='submit' className='btn btn-success' type="submit">Confirm Booking</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;