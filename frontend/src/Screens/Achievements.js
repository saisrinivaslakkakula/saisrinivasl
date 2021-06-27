import React from 'react'
import * as Icon from 'react-feather';
import PageBanner from '../components/PageBanner'
const Achievements = () => {
    return (
        <div>
            <PageBanner pageTitle="My Achievements"/>
            <div className="solutions-area ptb-80">
                <div className="container justify-content-center">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="solutions-box">
                                <img className="achivement-image" src="/images/achievements/covidcombat.jpg"></img>
                                <div className="icon">  
                                    <div className="achivement-heading">
                                                                    
                                        <a> COVID Combat Innovation Award</a>
                                        <p> Capgemini | 2020</p>
                                    </div>
                                </div>
                                <p>The award has been presented to felicitate my contribution in developing an Internal application called <b>Namaste Capgemini</b>. </p>

                                
                                    <a className="learn-more-btn">
                                        <Icon.PlusCircle /> Learn More
                                    </a>
                               
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="solutions-box">
                                <img className="achivement-image" src="/images/achievements/techrookie.jpg"></img>
                                <div className="icon">  
                                    <div className="achivement-heading">
                                                                 
                                        <a> Tech Rookie</a>
                                        <p> Capgemini | 2019</p>
                                    </div>
                                </div>
                                <p>The organization valued my contribution towards building automation scripts that eased and enhanced performance of data migration project for a Dutch based Insurance major . </p>

                                
                                    <a className="learn-more-btn">
                                        <Icon.PlusCircle /> Learn More
                                    </a>
                               
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="solutions-box">
                                <img className="achivement-image" src="/images/achievements/valuecreator.jpg"></img>
                                <div className="icon">  
                                    <div className="achivement-heading">
                                                                  
                                        <a> Value Creator</a>
                                        <p> Capgemini | 2018</p>
                                    </div>
                                </div>
                                <p>The award has been presented to value my contribution towards training and nurturing a  batch of 40 young talent (College Hires). </p>
                                    <a className="learn-more-btn">
                                        <Icon.PlusCircle /> Learn More
                                    </a>
                               
                            </div>
                        </div>
                        
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="solutions-box">
                                <img className="achivement-image" src="/images/achievements/LnD.jpg"></img>
                                <div className="icon">  
                                    <div className="achivement-heading">
                                                                    
                                        <a> Learning & Development</a>
                                        <p> Capgemini | 2020</p>
                                    </div>
                                </div>
                                <p>The award has been presented by Capgemini by recognizing my contribution towards building revised curriculum and learning execution plan towards Central Freshers Program  </p>

                                
                                    <a className="learn-more-btn">
                                        <Icon.PlusCircle /> Learn More
                                    </a>
                               
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="solutions-box">
                                <img className="achivement-image" src="/images/achievements/Technozion.jpg"></img>
                                <div className="icon">  
                                    <div className="achivement-heading">
                                                                 
                                        <a> Technozion 2k15</a>
                                        <p> NIT Warangal | 2015</p>
                                    </div>
                                </div>
                                <p>Technozion is a national level technical symposium organised by National Institute of Technology Warangal. Myself along with the team of two peers, participated in an event called Circuitrix and cracked the first prize!</p>

                                
                                    <a className="learn-more-btn">
                                        <Icon.PlusCircle /> Learn More
                                    </a>
                               
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achievements
