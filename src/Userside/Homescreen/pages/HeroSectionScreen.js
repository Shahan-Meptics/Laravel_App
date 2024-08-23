import React from 'react';
import happy from '../../../assets/happy.png';   
import dotted from '../../../assets/dotted.png';
import '../../../css/heroscreen.css';

const HeroSectionScreen = () => {
    return (
        <div className="container layout-section">
            <img
                src={dotted} 
                alt="Top Left Image"
                className="top-left-image"
            />
            <div className="row align-items-center text-start mt-5">
                <div className="col-md-6">
                    <h1 className="hero-heading">Khelo jeeto aur khwab puray karo</h1>
                    <button className="btn btn-primary buy-ticket-btn">Buy a Ticket</button>
                </div>
                <div className="col-md-6 text-end">
                    <img style={{ borderRadius: '0px' }} src={happy} alt="Example" className="img-fluid happy-image" />
                </div>
            </div>
        </div> 
    );
};

export default HeroSectionScreen;
