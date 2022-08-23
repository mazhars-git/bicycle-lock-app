import React from 'react';

const Contact = () => {
    return (
        <section className="container py-4">
            <div className="row">
                <div className="col-md-6">
                    <h5>Contact Us</h5>
                    <h3>Get &copy; Catch Anytime From Anywhere <br />We Are Available Anytime.</h3>
                    <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla odio corrupti qui, placeat iure sit.</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam mollitia ullam repellat libero provident minima necessitatibus ratione eum aspernatur vitae.</p>
                </div>
                <div className="col-md-6">
                    <h2>Get A Free Quote</h2>
                    <form>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span><i className="fas fa-user"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="username" />
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span><i className="fas fa-user"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="username" />
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span><i className="fas fa-user"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="username" />
                        </div>
                    </form>

                </div>
            </div>
            
        </section>
    );
};

export default Contact;