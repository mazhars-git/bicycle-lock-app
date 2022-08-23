import React from 'react';
import Device from "../../../images/mobile.png";
import Configure from "../../../images/configure.png";
import Done from "../../../images/done.png";

const Instruction = () => {
    return (
        <section className="container my-5">
            <div className="row">
                <div className="col-md-6 align-self-center">
                    <h4>How it works</h4>
                    <h2>Easy To Begin</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nemo officia voluptatem accusantium corporis perspiciatis eos veniam, debitis cumque iure dolore incidunt et harum quaerat.</p>
                    <button className="btn btn-primary">Shop Now</button>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <img src={Device} alt="" />
                                <h5>Connect Device</h5>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tenetur odit dolores ea, itaque iure.</p>
                                <a href="#">Learn More</a>
                            </div>
                            <div>
                                <img src={Configure} alt="" />
                                <h5>Configure It</h5>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tenetur odit dolores ea, itaque iure.</p>
                                <a href="#">Learn More</a>
                            </div>
                        </div>
                        <div className="col-md-6 align-self-center">
                            <div>
                                <img src={Done} alt="" />
                                <h5>Yah! Done</h5>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tenetur odit dolores ea, itaque iure.</p>
                                <a href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Instruction;