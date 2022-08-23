import React from 'react';
import Lock from "../../../images/smLock.png";
import Image from "../../../images/bg-shape.png";
import "./Features.css";

const Features = () => {
    return (
        <section className="container py-5">
            <div style={{width: "40%"}} className="m-auto text-center">
                <h4>Smart Lock</h4>
                <h2>Amazing Features</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos rem consectetur nobis necessitatibus aliquam alias.</p>
            </div>
            <div className="row pb-5">
                <div className="col-md-3 text-right">
                    <div>
                        <h6>Safe and Reliable</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, autem?</p>
                    </div>
                    <div>
                        <h6>Safe and Reliable</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, autem?</p>
                    </div>
                    <div>
                        <h6>Safe and Reliable</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, autem?</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={Lock} alt="" />
                </div>
                <div className="col-md-3">
                    <div>
                        <h6>Safe and Reliable</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, autem?</p>
                    </div>
                    <div>
                        <h6>Safe and Reliable</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, autem?</p>
                    </div>
                    <div>
                        <h6>Safe and Reliable</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, autem?</p>
                    </div>
                </div>
            </div>
            <div className="feature-bottom">
                <img className="img-fluid card-img" src={Image} alt="" />
                <div className="feature-card">
                    <h2>One of the best products <br /> for smart people</h2>
                </div>
                <div className="feature-btn">
                    <button className="btn btn-brand">Shop Now</button>
                </div>
            </div>
        </section>
    );
};

export default Features;