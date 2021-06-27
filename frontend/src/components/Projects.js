import React from 'react'
import {Link} from 'react-router-dom'
import { FaSuitcase } from 'react-icons/fa'

const Projects = () => {
    return (
        <div>

            <div className="ml-services-area ptb-80">
                <div className="container">   
                    <div className="row justify-content-center">
                        <h2 > <FaSuitcase/> My Portfolio</h2>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/services-image/service-image1.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>3D Graphics Engine Design</a>
                                    </Link>
                                </h3>
                                <p>Designed and Implemented 3D Graphics Engine using Mathematical foundation of Vector Algebra and LPC1769 Micro Processor.</p>
                                <a href="#"><u><b>Read More</b></u> </a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/services-image/service-image3.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        Software Engineers
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/services-image/service-image3.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Health & Manufacturing</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/services-image/service-image4.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Security & Surveillance</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/services-image/service-image5.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Automatic Optimization</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/services-image/service-image6.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Data Analysts</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects
