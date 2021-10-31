import React, { useState } from 'react';

const OrderServices = (props) => {

  const { firstName, description, img, price, _id } = props.service;
  const [text, setText] = useState("");
  const handleDelete = (e, id) => {
    const url = `http://localhost:5000/services/${id}`;

    if (window.confirm("Are you sure! Do you want to delete this service?")) {
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(result => {
          e.target.parentNode.parentNode.style.display = 'none';
          alert('Service has been deleted successfully!');
        })
    }
  }
  return (
    <div className="service-style ">
      <div className="">
        <img className="img-style" src={img} alt="" />
      </div>
      <div className="card-body">
        <h2><i class="fas fa-map-marker-alt location"></i> {firstName}</h2>
        <p>{description}</p>
        <p>{price} <i class="fas fa-dollar-sign"></i></p>
        <button className="btn btn-success" onClick={(e) => handleDelete(e, _id)}>Delete</button>
      </div>
    </div>
  );
};

export default OrderServices;