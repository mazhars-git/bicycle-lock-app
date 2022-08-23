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
                    <p>Privacy Policy</p>  
                    <p>Carrier</p>  
                    <p>Location</p>  
                </div>
                <div className="col-md-3">
                    <h2>Useful Links</h2>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Youtube</p>
                </div>
                <div className="col-md-3">
                    <h2>Newsletters</h2>
                    <input type="text"></input>
                    <button>Submit</button>
                </div>
            </div>
        </section>
    );
};

export default Footer;