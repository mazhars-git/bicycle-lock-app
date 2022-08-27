import React from 'react';
import Logo from '../../../images/logo.png';
import '../../CSS/MainMenu.css';

const MainMenu = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-none">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={Logo} alt="" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse nav-menu-item" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Products</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
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