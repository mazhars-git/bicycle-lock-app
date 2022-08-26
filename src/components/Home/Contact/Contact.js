import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faPen, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "../../CSS/Contact.css";

const Contact = () => {
    return (
        <section className="container py-4">
            <div className="row">
                <div className="col-md-7 align-self-center">
                    <h5 className='semi-heading'>Contact Us</h5>
                    <h3 className='small-heading'>Get & Catch Anytime From Anywhere <br />We Are Available Anytime.</h3>
                    <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla odio corrupti qui, placeat iure sit.</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam mollitia ullam repellat libero provident minima necessitatibus ratione eum aspernatur vitae.</p>
                </div>
                <div className="col-md-5 contact-form">
                    <h2 className="small-heading pb-3">Get A Free Quote</h2>
                    <form>
                        <div className="input-group form-group">                            
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Full Name" />
                                <span><FontAwesomeIcon icon={faUser} /></span>
                            </div>
                        </div>
                        <div className="input-group form-group">                            
                            <div className="input-group">
                                <input type="email" className="form-control" placeholder="Email Address" />
                                <span><FontAwesomeIcon icon={faEnvelope} /></span>
                            </div>
                        </div>
                        <div className="input-group form-group">                            
                            <div className="input-group">
                                <textarea rows="4" cols="50" className="form-control" placeholder="Enter Message" />
                                <span><FontAwesomeIcon icon={faPen} /></span>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary">Get In Touch</button>
                       
                        {/* <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span><i className="fas fa-user"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="username" />
                        </div> */}
                    </form>

                </div>
            </div>
            
        </section>
    );
};

export default Contact;