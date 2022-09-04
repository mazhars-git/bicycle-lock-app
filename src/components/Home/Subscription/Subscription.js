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

                <div className="d-flex justify-content-center">
                    <div className="video-section">
                        <div>
                            <img className="img-fluid" src={Cycle} alt="" />
                        </div>                        
                        <div className='play-btn'>
                            <FontAwesomeIcon className="play-icon" icon={faPlayCircle} />
                            <h2>Watch Video Now</h2>
                        </div>
                        <div className='video-timer d-flex'>
                            <div className="paused-icon">
                                <FontAwesomeIcon icon={faPlay} />
                            </div>
                            
                            <div className='paused'>
                                <p>Paused</p>
                                <p>01m 30s remaining</p>
                            </div>
                            <div className="d-flex flex-column">
                                <div className='video-timeline'></div>
                                <div className='video-timeline2'></div>
                            </div>                    
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscription;