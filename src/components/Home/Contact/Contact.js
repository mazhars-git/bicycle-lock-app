import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faPen, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "../../CSS/Contact.css";

const Contact = () => {
    return (
        <section className="container py-5">
            <div className="row py-3">
                <div className="col-md-7 align-self-center">
                    <div className="contact-info">
                        <h5 className='semi-heading'>Contact Us</h5>
                        <h3 className='small-heading'>Get & Catch Anytime From Anywhere <br />We Are Available Anytime.</h3>
                        <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla odio corrupti qui, placeat iure sit.</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam mollitia ullam repellat libero provident minima necessitatibus ratione eum aspernatur vitae.</p>
                    </div>
                </div>

                <div className="col-md-5">
                    <div className="contact-form">
                        <h2 className="small-heading">Get A Free Quote</h2>
                        <form>
                            <div className="input-group form-group">                            
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Full Name" />
                                    <span className='icon'><FontAwesomeIcon icon={faUser} /></span>
                                </div>
                            </div>
                            <div className="input-group form-group">                            
                                <div className="input-group">
                                    <input type="email" className="form-control" placeholder="Email Address" />
                                    <span className='icon'><FontAwesomeIcon icon={faEnvelope} /></span>
                                </div>
                            </div>
                            <div className="input-group form-group">                            
                                <div className="input-group">
                                    <textarea rows="4" cols="50" className="form-control" placeholder="Enter Message" />
                                    <span className='icon'><FontAwesomeIcon icon={faPen} /></span>
                                </div>
                            </div>

                            <button type="submit" class="btn btn-brand" style={{backgroundColor: 'orange'}}>Get In Touch</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Contact;