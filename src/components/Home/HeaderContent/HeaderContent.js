import React from 'react';
import Lock from "../../../images/lock.png";

const HeaderContent = () => {
    return (
        <section className="container">
            <div className="row">
                <div className="col-md-6 py-5 align-self-center">
                    <h1 className="big-heading pb-3">Smart <br /> Bicycle Lock</h1>
                    <p className="pb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit voluptatum facilis delectus quas aut unde laboriosam iusto? Eveniet, vel maxime!</p>
                    <button className="btn btn-brand">Shop Now</button>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={Lock} alt="" />
                </div>
            </div>
        </section>
    );
};

export default HeaderContent;