import React from 'react'
import {Link} from 'react-router-dom'
import { FaSuitcase } from 'react-icons/fa'
import PageBanner from '../components/PageBanner'
const Projects = () => {
    return (
        <div>
            <PageBanner pageTitle="My Projects"/>
            <div className="ml-services-area ptb-80">
                <div className="container">   
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/portfolio-image/3dge.jpg" alt="image" />
                                </div>
                                <h3>
                                    <Link to="/projectDetails">
                                        <a>3D Graphics Engine Design</a>
                                    </Link>
                                </h3>
                                <p>Designed and Implemented 3D Graphics Engine using Mathematical foundation of Vector Algebra and LPC1769 Micro Processor.</p>
                                <Link to="/projectDetails"><u><b>Read More</b></u> </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/portfolio-image/mobileApps.jpg" alt="image" />
                                </div>
                                <h3>
                                    <Link to="/projectDetails">
                                        <a>Namaste Capgemini App</a>
                                    </Link>
                                </h3>
                                <p>Namaste Capgemini is an android/iOS based movile application that is being used by Capgemini to carryout their business operations smoothly that were impacted by COVID-19 Pandemic.</p>
                                <Link to="/projectDetails"><u><b>Read More</b></u> </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/portfolio-image/service-image2.png" alt="image" />
                                </div>
                                <h3>
                                    <Link to="/projectDetails">
                                        <a>Code Review Tool</a>
                                    </Link>
                                </h3>
                                <p> The automation tool performs the code analysis and checks if the target language being analysed follows codeing standards set by the project management team.</p>
                                <Link to="/projectDetails"><u><b>Read More</b></u> </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/portfolio-image/service-image4.png" alt="image" />
                                </div>
                                <h3>
                                    <Link to="/projectDetails">
                                        <a>My 360 Application</a>
                                    </Link>
                                </h3>
                                <p>My 360 is an internal portal developed to ease resource and talant management operations of Capgemini FS Technology Practice</p>
                                <Link to="/projectDetails"><u><b>Read More</b></u> </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/portfolio-image/service-image5.png" alt="image" />
                                </div>
                                <h3>
                                    <Link to="/projectDetails">
                                        <a> Custom Automation Tool Design </a>
                                    </Link>
                                </h3>
                                <p>
                                    The Challenges in data migration of a Dutch based insurance major company had been overcome by developing automation scripts that handles data inconsitency problems.
            
                                </p>
                                <Link to="/projectDetails"><u><b>Read More</b></u> </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/portfolio-image/service-image6.png" alt="image" />
                                </div>
                                <h3>
                                    <Link to="/projectDetails">
                                        <a>Learning & Development Coordinator</a>
                                    </Link>
                                </h3>
                                <p>To complete extra miles in my career journey, I Voluntarily contributed towards designing, facilitating and executing the organization level learning program.</p>
                                <Link to="/projectDetails"><u><b>Read More</b></u> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects
