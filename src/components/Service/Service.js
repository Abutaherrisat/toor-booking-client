import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
 
  
  const { firstName, description, img, price, _id } = props.service

  return (
    <div className="service-style ">
      <div className="">
        <img className="img-style" src={img} alt="" />
      </div>
      <div className="card-body">
        <h2><i class="fas fa-map-marker-alt location"></i> {firstName}</h2>
        <p>{description}</p>
        <p>{price} <i class="fas fa-dollar-sign"></i></p>
        <Link to={`/booking/${_id}`}>
          <button className="btn btn-success">BOOK TICKET NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default Service;