import React from 'react';
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

const MainBanner = () => {
    return (
        <div style={{ marginTop: '10%'}} className="container ">
            <div className="agency-main-banner">
                <div  className="row">
                <div className="col-md-6">
                        <img src="./images/Cover-small.jpg" alt="Banner"></img>
                    </div>
                    <div className="col-md-6">
                        <div className="cover-text-center">
                        <Fade right>
                        <h2>The world is always a good place to live. All we're trying to do is to make it better</h2>
                        <h4>Sai Srinivas Lakkakula</h4>
                        <h6>Software Engineer | Full-Stack Web Developer | AI/ML Enthusiast  </h6>
                        </Fade>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default MainBanner;