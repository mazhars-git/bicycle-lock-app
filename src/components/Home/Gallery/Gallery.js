import React from 'react';
import Image from '../../../images/cycle.png';
import Image_2 from '../../../images/cycle-2.png';
import Image_3 from '../../../images/cycle-3.png';
import Image_4 from '../../../images/cycle-4.png';
import Image_5 from '../../../images/cycle-5.png';
import '../../CSS/Gallery.css';


const Gallery = () => {
    return (
        <section className="py-5">
            <div className="container gallery py-5">
                <div style={{width: '40%', margin: 'auto'}} className="text-center pb-3">
                    <h5 className="semi-heading">Our Gallery</h5>
                    <h2>Here is Some of Our Gallery</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, quod commodi. Pariatur hic quia eos.</p>
                </div>
                <div className="row m-auto w-75">
                    <div className="col-md-4">
                        <img className="img-fluid mb-3" src={Image} alt="" />
                        <img className="img-fluid" src={Image_2} alt="" />
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid" src={Image_3} alt="" />
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid mb-3" src={Image_4} alt="" />
                        <img className="img-fluid" src={Image_5} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;