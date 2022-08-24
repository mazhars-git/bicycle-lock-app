import React from 'react';
import Logo from '../../../images/logo new.png';
import '../../CSS/Footer.css';

const Footer = () => {
    return (
        <section className="footer-area">
            <div className="container footer-content pt-5">
                <div className="row">
                    <div className="col-md-3">
                        <img src={Logo} alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur suscipit exercitationem molestiae, totam corrupti similique at accusamus neque earum?</p>
                    </div>
                    <div className="col-md-3">
                        <h2 className="semi-header">Company</h2>
                        <ul>
                            <li><a href="#">Oedering Info</a></li>  
                            <li><a href="#">Nursery/Tree From</a></li>  
                            <li><a href="#">Peste & Weeds Control</a></li>  
                        </ul> 
                    </div>
                    <div className="col-md-3">
                        <h2 className="semi-header">Useful Links</h2>
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
                        <h2 className="semi-header">Newsletters</h2>
                        <div className="d-flex">
                            <input className="form-control" type="text"></input>
                            <button className="btn form-control">Submit</button>
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
            </div>
        </section>
    );
};

export default Footer;