import React from 'react';
import Cycle from '../../../images/cycle-bg.png';

const Subscription = () => {
    return (
        <section className="container py-5">
            <div style={{width: '40%', margin: 'auto'}} className="text-center">
                <h2>Subscribe to Our Newsletter</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quis aliquid, temporibus possimus voluptas tenetur.</p>
                <br />
                <input className="" type="text" /><button className="btn">Subscribe</button>
            </div>
            <div className="m-auto w-75">
                <img className="img-fluid" src={Cycle} alt="" />
            </div>
        </section>
    );
};

export default Subscription;