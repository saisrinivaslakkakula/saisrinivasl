import React from 'react';
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';

const MainBanner = () => {
    return (
        <div style={{marginTop:'10%'}}className="agency-main-banner">
            <div className="container-fluid">
                <div className="row align-items-center">
                <div className="col-lg-12 col-md-12">
                        <div className="agency-banner-image container">
                            <img src="/images/Cover.jpg" style={{visibility:'hidden'}} alt="Banner "/>
                            <Fade  left>
                            <h1 className="cover-text-center">The World is always a good place.
                            <h1 style={{color:'black'}}>
                                All we are trying to do is to make it better.
                            </h1>
                            </h1>
                            <h5 className="cover-text-bottom">
                                Sai Srinivas Lakkakula  
                            </h5>
                            <p className="cover-text-title">
                                Application Developer | Full-Stack Web Developer | AI/ML Enthusiast 
                            </p>
                            </Fade>  
                        </div>
                </div>
                </div>
            </div>

            
        </div>
    );
}

export default MainBanner;