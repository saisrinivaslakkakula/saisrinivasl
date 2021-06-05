import React from 'react';
import Footer from "../components/Footer";
import PageBanner from '../components/PageBanner';
import Header from '../components/Header';

const About1 = () => {
    return (
        <div>
           

            <PageBanner pageTitle="About Us" />

            <div className="about-area ptb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/about-one.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <div className="section-title">
                                    <h2>Creating A Better Future By Propagating The Best Values.</h2>
                                    <div className="bar"></div>
                                    <p>These values can be from any aspect of reality. Wherein, human reality is based on interaction with the universe. The human mind is constantly creating processes to optimize these interactions. 
                                        It could be a carpenter building the most stable chair, or a group of scientists building the most efficient particle accelerator to study atoms. 
                                        The key elements of our evolution has always been Observation, Evaluation, Optimization and Automation of every human Interaction with reality.</p>
                                </div>

                                {/*<p>The rapid growth of technology coupled with the tightened software development time and production cost constraints have imposed tremendous pressure and an intense desire for software enterprises to create new and innovative designs, which respond to rapidly changing business and operating environments. 
                                    Enterprises must invest in building stable architectures that are flexible and that can be easily adapted. We refer to these emerging trends of architectures as Architectures on Demand: as they can be adaptable, customizable, extensible, personalizable, self-configurable, and self-manageable accordingly to meet the future requirements and changes in the operating environments.</p>*/}
                            </div>
                        </div>
                    </div>

                    <div className="about-inner-area">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>Our History</h3>
                                    <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>Our Mission</h3>
                                    <p>To Create A Disciplined And Unified Approach Towards Every Human Process Through A Highly Stable Model That Will Aid In Any Field Of Knowledge From Architecture To Software Engineering. 
                                        The Collective Knowledge Acquired Stages To Be The Core Of Human Values And We Are Here To Preserve ,Patternize And Propagate It.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>Who We Are</h3>
                                    <p>A group of enthusiasts who pave path to your career journey by connecting Authors and readers together. Yes! You heard it Right! We make it easier.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            
         
        </div>
    )
}

export default About1;