import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, logout } = useFirebase()
    return (
        <div className="header-container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">TOUR IN BD</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link items" aria-current="page" to="/home">Home</Link>
                            
                            <Link className="nav-link items" to="/about">About Us</Link>
                            <Link className="nav-link items" to="/contact">Contact us</Link>
                            {
                                user?.email &&<Link className="nav-link items" to="/addservice">Add Service</Link>
                            }
                            {
                                user?.email && <Link className="nav-link items" to="/myorder">My Order</Link>
                            }
                            {
                                user?.email && <Link className="nav-link items" to="/manageservice">Manage Service</Link>
                            }
                            {
                                user?.email ? <button className="btn btn-danger" onClick={logout}>LogOut</button> : <Link class="nav-link items btn btn-warning" to="/login">Login</Link>
                            }
                           
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;