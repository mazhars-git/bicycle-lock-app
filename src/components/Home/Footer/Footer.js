import React from 'react';
import Logo from '../../../images/logo.png';

const Footer = () => {
    return (
        <section className="container-fluid pt-4">
            <div className="row">
                <div className="col-md-3">
                    <img src={Logo} alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est pariatur eius itaque accusantium impedit officia suscipit exercitationem molestiae, totam corrupti similique at accusamus neque earum?</p>
                </div>
                <div className="col-md-3">
                    <h2>Company</h2>
                    <p>Oedering Info</p>  
                    <p>Nursery/Tree From</p>  
                    <p>Peste & Weeds Control</p>  
                </div>
                <div className="col-md-3">
                    <h2>Useful Links</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <ul>
                                <li><a href="#">About </a></li>
                                <li><a href="#">Pricing </a></li>
                                <li><a href="#">Gift Cards </a></li>
                                <li><a href="#">FAQ </a></li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Appointment</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Use</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <h2>Newsletters</h2>
                    <div>
                        <input className="form-control" type="text"></input>
                        <button className="form-control">Submit</button>
                    </div>
                    <div>
                        <ul>
                            <li><a href="#">facebook</a></li>
                            <li><a href="#">facebook</a></li>
                            <li><a href="#">facebook</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;