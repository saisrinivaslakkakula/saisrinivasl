import React from 'react';
import {Link} from 'react-router-dom';

const MainBanner = () => {
    return (
        <div className="agency-main-banner">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="agency-banner-content">
                            
                            <h1>Aeeh Press</h1>
                            <p>Bringing Authors and Readers together.</p>

                            <Link to={"/contact"} className="btn btn-secondary">
                                Get Started
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="agency-banner-image">
                            <img src="/images/agency-image/HomePageImage.jpg" alt="Banner " />
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape2 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
            <div className="shape3">
                <img src="/images/shape3.svg" alt="shape" />
            </div>
            <div className="shape4">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
        </div>
    );
}

export default MainBanner;