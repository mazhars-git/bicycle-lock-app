import React from 'react';
import Cycle from '../../../images/cycle-bg.png';
import '../../CSS/Subscription.css';


const Subscription = () => {
    return (
        <section className="container py-5">
            <div className="text-center">
                <h2 className="small-heading">Subscribe to Our Newsletter</h2>
                <p style={{width: '45%', margin: 'auto'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quis aliquid, temporibus possimus voluptas tenetur.</p>
                <br />
                <div className="subscribe-input pb-5">
                    <input type="text" placeholder='Enter Your Email Address...' />
                    <button className="btn subscribe-btn">Subscribe</button>
                </div>
            </div>

            <div className="m-auto w-75">
                <img className="img-fluid" src={Cycle} alt="" />
            </div>
        </section>
    );
};

export default Subscription;