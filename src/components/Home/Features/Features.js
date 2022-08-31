import React from 'react';
import Lock from "../../../images/smLock.png";
import Image from "../../../images/bg-shape.png";
import "../../CSS/Features.css";

const Features = () => {
    return (
        <section className="container py-5">
            <div style={{width: "40%"}} className="m-auto text-center">
                <h4 className="semi-heading">Smart Lock</h4>
                <h2 className="small-heading">Amazing Features</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos rem consectetur nobis necessitatibus aliquam alias.</p>
            </div>
            <div className="row pb-5">
                <div className="col-md-4 text-right align-self-center">
                    <div className='content-box1'>
                        <div className="pr-4">
                            <h4>Safe and Reliable</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, autem?</p>
                        </div>                        
                        <div className="shape-box pr-2">
                            <span className="circle-left"></span>
                            <span className="line-left"></span>
                        </div>                        
                    </div>
                    <div className='content-box2'>
                        <div className="content-2">
                            <h4>Safe and Reliable</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, autem?</p>
                        </div>                        
                        <div className="shape-box pr-2">
                            <span className="circle-left2"></span>
                            <span className="line-left2"></span>
                        </div>                        
                    </div>
                    <div className='content-box3'>
                        <div className="content-3">
                            <h4>Safe and Reliable</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, autem?</p>
                        </div>                        
                        <div className="shape-box pr-2">
                            <span className="circle-left3"></span>
                            <span className="line-left3"></span>
                        </div>                        
                    </div>
                </div>

                <div className="col-md-4">
                    <img className="img-fluid" src={Lock} alt="" />
                </div>

                <div className="col-md-4 align-self-center">
                    <div className='content-box1'>
                        <div className="pr-4">
                            <h4>Safe and Reliable</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, autem?</p>
                        </div>                        
                        <div className="shape-box">
                            <span className="circle-right"></span>
                            <span className="line-right"></span>
                        </div>                        
                    </div>
                    <div className='content-box2'>
                        <div className="">
                            <h4>Safe and Reliable</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, autem?</p>
                        </div>                        
                        <div className="shape-box">
                        <span className="circle-right2"></span>
                            <span className="line-right2"></span>
                        </div>                        
                    </div>
                    <div className='content-box3'>
                        <div className="content-3">
                            <h4>Safe and Reliable</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, autem?</p>
                        </div>                        
                        <div className="shape-box pr-2">
                            <span className="circle-right3"></span>
                            <span className="line-right3"></span>
                        </div>                        
                    </div>
                </div>
            </div>
            <div className="feature-bottom">
                <img className="img-fluid card-img" src={Image} alt="" />
                <div className="feature-card">
                    <h2>One of the best products <br /> for smart people</h2>
                </div>
                <div className="feature-btn">
                    <button className="btn btn-feature">Shop Now</button>
                </div>
            </div>
        </section>
    );
};

export default Features;