import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css'



const Footer = () => {


    return (
        <div className="footer-container row  d-flex w-100 pt-10">
            <div className="col-lg-3  col-md-3 col-sm-12">
                <div className=" ms-5 text-white ">
                    <h2>BOOKING TICKET</h2>
                    <p> Level-4, 34, Awal Centre, Banani, Dhaka</p>
                    <p> Official: ticketbooking@gmail.com</p>
                    <p> Helpline : 01322810867 (Available : 09:00am to 7:00pm)</p>
                </div>
            </div>
            <div className="col-lg-3  col-md-3 col-sm-6">
                <div className=" ms-5 text-white ">
                    <p className="icon"> <i class="fab fa-instagram-square"></i> Instagram</p>
                    <p className="icon"><i class="fab fa-facebook"></i> Facebook</p>
                    <p className="icon"><i class="fab fa-twitter"></i> Twitter</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
                <div className=" ms-5 text-white ">
                    <h3>Quick Link</h3>
                    <ul>
                        <li>
                            <Link className="quick-items" to="/">HOME</Link>
                        </li>
                        <li>
                            <Link className="quick-items" to="/about">ABOUT US</Link>
                        </li>
                        <li>
                            <Link className="quick-items" to="/contact">CONTACT US</Link>
                        </li>
                        <li>
                            <Link className="quick-items" to="/login">LOGIN</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
                <div className=" ms-5 text-white ">
                    <h3>pay with</h3>
                    <p>Mstered Card</p>
                    <p>Paypal</p>
                    <p>NOGOD</p>
                    <p>ROCKET</p>
                    <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
                </div>
            </div>
            <p className="text-center text-white"> Copyright © 2021 medicine-care.com</p>
        </div>
    );
};

export default Footer;