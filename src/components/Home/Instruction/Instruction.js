import React from 'react';
import Device from "../../../images/mobile.png";
import Configure from "../../../images/configure.png";
import Done from "../../../images/done.png";
import '../../CSS/Instruction.css';

const Instruction = () => {
    return (
        <section className="instruction">
            <div className="container py-5 instruction-content">
                <div className="row">
                    <div className="col-md-6 align-self-center">
                        <div className="instruction-left-content">
                            <h4 className='semi-heading'>How it works</h4>
                            <h2 className='small-heading'>Easy To Begin</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nemo officia voluptatem accusantium corporis perspiciatis eos veniam, debitis cumque iure dolore incidunt et harum quaerat.</p>
                            <button className="btn btn-brand">Shop Now</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="instruction-right-content">
                                    <img src={Device} alt="" />
                                    <h4>Connect Device</h4>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tenetur odit dolores ea, itaque iure.</p>
                                    <a href="#">Learn More</a>
                                </div>
                                <div className="instruction-right-content mt-3">
                                    <img src={Configure} alt="" />
                                    <h4>Configure It</h4>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tenetur odit dolores ea, itaque iure.</p>
                                    <a href="#">Learn More</a>
                                </div>
                            </div>
                            <div className="col-md-6 align-self-center">
                                <div className="instruction-right-content">
                                    <img src={Done} alt="" />
                                    <h4>Yah! Done</h4>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tenetur odit dolores ea, itaque iure.</p>
                                    <a href="#">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Instruction;