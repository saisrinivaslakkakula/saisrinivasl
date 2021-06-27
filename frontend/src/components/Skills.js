import React from 'react'
import {Link} from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel3';
import ReactStars from "react-rating-stars-component";
const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 500,
    responsive: {
        0:{
            items:1,
        },
        576:{
            items:1,
        },
        768:{
            items:1,
        },
        1024:{
            items:1,
        },
        1200:{
            items:1,
        }
    }
}
const Skills = () => {
    return (
        <div id="Skills">
                <h1 style={{marginTop:'2%',textAlign:'center'}}>My Skills</h1>
            <div className="ml-partner-area mt-minus-top ptb-80 pb-0">
                <div className="container">
                     
                     <OwlCarousel
                        className="partner-slides owl-carousel owl-theme"
                        {...options}
                     > 
                        <div className="row">
                            <div style={{marginTop:'1%',borderRight:'5px solid #7f7f7f'}} className="col-md-4">
                                    <h1 style={{color:'#7f7f7f'}}> Web Development (LAMP Stack)</h1>
                            </div>
                            <div className="col-md-8 ml-partner-area.mt-minus-top">
                                <div className="row">
                                <div className="col-md-2">
                                    <p>
                                        <i className="devicon-linux-plain devicon"></i>
                                    </p>
                                </div>
                                <div className="col-md-2">
                                    <p>
                                    <i className="devicon-apache-line-wordmark devicon"></i>
                                    </p>
                                </div>
                                <div className="col-md-2">
                                    <p>
                                    <i className="devicon-mysql-plain-wordmark devicon"></i>
                                    </p>
                                </div>
                                <div className="col-md-2">
                                    <p>
                                    <i className="devicon-php-plain devicon"></i>
                                    </p>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col-md-2">
                                <ReactStars count={5} value={4} isHalf size={15}  activeColor="#ffd700" />
                                </div>
                                <div className="col-md-2">
                                <ReactStars count={5} value={3.5} isHalf size={15}  activeColor="#ffd700" />
                                </div>
                                <div className="col-md-2">
                                <ReactStars count={5} value={3.5} isHalf size={15}  activeColor="#ffd700" />
                                </div>
                                <div className="col-md-2">
                                <ReactStars count={5} value={4.5} isHalf size={15}  activeColor="#ffd700" />
                                </div>
                                </div>                              
                            </div>
                        </div>

                        <div className="row">
                            <div style={{marginTop:'1%',borderRight:'5px solid #7f7f7f'}} className="col-md-4">
                                    <h1 style={{color:'#7f7f7f'}}> Web Development (MERN Stack)</h1>
                            </div>
                            <div className="col-md-8 ml-partner-area.mt-minus-top">
                                <div className="row">
                                <div className="col-md-2">
                                    <p>
                                        <i className="devicon-mongodb-plain-wordmark devicon"></i>
                                    </p>
                                </div>
                                <div className="col-md-2">
                                    <p>
                                    <i className="devicon-express-original-wordmark devicon"></i>
                                    </p>
                                </div>
                                <div className="col-md-2">
                                    <p>
                                    <i className="devicon-react-original-wordmark devicon"></i>
                                    </p>
                                </div>
                                <div className="col-md-2">
                                    <p>
                                    <i className="devicon-nodejs-plain-wordmark devicon"></i>
                                    </p>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col-md-2">
                                <ReactStars count={5} value={4} isHalf size={15}  activeColor="#ffd700" />
                                </div>
                                <div className="col-md-2">
                                <ReactStars count={5} value={3} isHalf size={15}  activeColor="#ffd700" />
                                </div>
                                <div className="col-md-2">
                                <ReactStars count={5} value={4} isHalf size={15}  activeColor="#ffd700" />
                                </div>
                                <div className="col-md-2">
                                <ReactStars count={5} value={3.5} isHalf size={15}  activeColor="#ffd700" />
                                </div>
                                </div>                              
                            </div>
                        </div>

                        <div className="row">
                            <div style={{marginTop:'1%',borderRight:'5px solid #7f7f7f'}} className="col-md-4">
                                    <h1 style={{color:'#7f7f7f'}}> Programming languages</h1>
                            </div>
                            <div className="col-md-8 ml-partner-area.mt-minus-top">
                                <div className="row">
                                <div className="col-md-2">
                                    <p>
                                        <i className="devicon-python-plain-wordmark devicon"></i>
                                    </p>
                                </div>
                                <div className="col-md-2">
                                    <p>
                                    <i className="devicon-cplusplus-plain-wordmark devicon"></i>
                                    </p>
                                </div>
                                <div className="col-md-2">
                                    <p>
                                    <i className="devicon-java-plain devicon"></i>
                                    </p>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col-md-2">
                                <ReactStars count={5} value={4} isHalf size={15}  activeColor="#ffd700" />
                                </div>
                                <div className="col-md-2">
                                <ReactStars count={5} value={4} isHalf size={15}  activeColor="#ffd700" />
                                </div>
                                <div className="col-md-2">
                                <ReactStars count={5} value={3} isHalf size={15}  activeColor="#ffd700" />
                                </div>
                                </div>                              
                            </div>
                        </div>


                        <div className="row">
                            <div style={{marginTop:'1%',borderRight:'5px solid #7f7f7f'}} className="col-md-4">
                                    <h1 style={{color:'#7f7f7f'}}> Programing Tools and Technologies</h1>
                            </div>
                            <div className="col-md-8 ml-partner-area.mt-minus-top">
                                <div className="row">
                                <div className="col-md-2">
                                    <p>
                                        <i className="devicon-intellij-plain-wordmark devicon"></i>
                                    </p>
                                </div>
                                <div className="col-md-2">
                                    <p>
                                    <i className="devicon-vscode-plain devicon"></i>
                                    </p>
                                </div>
                                <div className="col-md-2">
                                    <p>
                                    <i className="devicon-git-plain-wordmark devicon"></i>
                                    </p>
                                </div>
                                </div>                            
                            </div>
                        </div>
                        
                    </OwlCarousel> 
                </div>
            </div>

        </div>
    )
}

export default Skills
