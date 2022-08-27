import React from 'react';
import LockBg from "../../../images/image-2.png";
import '../../CSS/Services.css';

const Services = () => {
    return (
        <section className="service pt-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6 align-self-center">
                        <img className="img-fluid" src={LockBg} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h6 className="semi-heading">Why Choose Us</h6>
                        <h2 className='small-heading'>We Provide Smart &amp; <br />Digital Services.</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque dolorem, maiores voluptas voluptatum consectetur dolor iure maxime inventore aliquid illum?</p>

                        <div className="service-item-box">
                            <div className="service-item">
                                <h4>Bluetooth Connection</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem id  perspiciatis obcaecati est quae consequuntur.</p>
                            </div>                        
                        </div>

                        <div className="service-item-box">
                            <div className="service-item">
                                <h4>USB Rechargeable</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem id perspiciatis obcaecati est quae consequuntur.</p>
                            </div>
                        </div>

                        <div className="service-item-box">
                            <div className="service-item">
                                <h4>Ultra-Long Standby</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem id perspiciatis obcaecati est quae consequuntur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;