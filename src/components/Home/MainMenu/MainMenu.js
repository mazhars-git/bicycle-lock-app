import React from 'react';
import Logo from '../../../images/logo.png';
import '../../CSS/MainMenu.css';

const MainMenu = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-none">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={Logo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav-menu-item" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        <button className="btn btn-brand menu-btn">Shop Now</button>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default MainMenu;