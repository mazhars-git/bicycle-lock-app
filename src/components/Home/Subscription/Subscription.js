import { faPauseCircle, faPlay, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Cycle from '../../../images/cycle-bg.png';
import '../../CSS/Subscription.css';


const Subscription = () => {
    return (
        <section className="subscription">
            <div className="container py-5">
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
                    <div className="video-section">
                        <img className="img-fluid" src={Cycle} alt="" />
                        <div className='play-btn'>
                            <FontAwesomeIcon icon={faPlayCircle} />
                            <h2>Watch Video Now</h2>
                        </div>
                        <div className='video-timer d-flex'>
                            <FontAwesomeIcon icon={faPlay} />
                            <div>
                                <p>Paused</p>
                                <p>01m 30s remaining</p>
                            </div>                    
                            <div className='video-timeline'></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscription;