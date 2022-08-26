import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import ImageFaq from '../../../images/faq.png';
import '../../CSS/FAQ.css';

const FAQ = () => {
    return (
        <section className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <div className='faq-content'>
                        <h5 className="semi-heading">Frequently Ask Question</h5>
                        <h3 className="small-heading">Solve your problem with <br />very fast</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rerum animi, laudantium nostrum accusantium aperiam.</p>

                        <div class="accordion" id="accordionExample">
                            <div class="item">
                                <div class="item-header" id="headingOne">
                                    <h2 class="mb-0">
                                        <button class="btn btn-link" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            How do I pay for the essentials or premium plan?
                                        <i class="fa fa-angle-down"><FontAwesomeIcon icon={faCaretRight}/></i>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                                    data-parent="#accordionExample">
                                    <div class="t-p">
                                        It is a long established fact that a reader will be distracted at its layout. as opposed to using it look like readable English.
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div class="item-header" id="headingTwo">
                                    <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How do I pay for the essentials or premium plan?
                                    <i class="fa fa-angle-down"><FontAwesomeIcon icon={faCaretRight}/></i>
                                    </button>
                                    </h2>
                                </div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                                    data-parent="#accordionExample">
                                    <div class="t-p">
                                        It is a long established fact that a reader will be distracted at its layout. as opposed to using it look like readable English.
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div class="item-header" id="headingThree">
                                    <h2 class="mb-0">
                                        <button class="btn btn-link collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">
                                            How do I pay for the essentials or premium plan?
                                        <i class="fa fa-angle-down"><FontAwesomeIcon icon={faCaretRight}/></i>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                                    data-parent="#accordionExample">
                                    <div class="t-p">
                                        It is a long established fact that a reader will be distracted at its layout. as opposed to using it look like readable English.
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div class="item-header" id="headingFour">
                                    <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false"
                                        aria-controls="collapseFour">
                                        How do I pay for the essentials or premium plan?
                                    <i class="fa fa-angle-down"><FontAwesomeIcon icon={faCaretRight}/></i>
                                    </button>
                                    </h2>
                                </div>
                                <div id="collapseFour" class="collapse" aria-labelledby="headingFour"
                                    data-parent="#accordionExample">
                                    <div class="t-p">
                                        It is a long established fact that a reader will be distracted at its layout. as opposed to using it look like readable English.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 align-self-center">
                    <div className='faq-img'>
                        <img className="img-fluid" src={ImageFaq} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;