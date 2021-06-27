import React from 'react'
import OwlCarousel from 'react-owl-carousel3';
import * as Icon from 'react-feather';
const options = {
    loop: false,
    nav: false,
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    items: 1,
    animateOut: 'fadeOut',
}

const Feedback = () => {
    return (
        <div>
             <div className="ml-feedback-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2>Recommendations</h2>
                    
                </div>

               <OwlCarousel 
                    className="ml-feedback-slides owl-carousel owl-theme"
                    {...options}
                > 
                    <div className = "row single-ml-feedback-item ">
                            <div className="col-md-4">
                            <img src="/images/client-image/ArunSandeep.jpeg" alt="image" />
                            <h3>ArunSandeep Chandradoss</h3>
                            <span>Senior Consultant | Capgemini</span>
                            </div>
                            <div className="col-md-8">
                                <p>I have mentored Sai for close to 2 years in my team for different tasks and have seen him performing extremely well. Technical brilliancy and excellent consistency in the Quality of his work make him a great asset to any team he works for. He has everything to become a great leader in terms of technical competence, communication, composure, commitment. I am sure that he will become one! </p>
                            </div>
                        
                    </div>
                    <div className = "row single-ml-feedback-item ">
                            <div className="col-md-4">
                            <img src="/images/client-image/Vijayraaj.jpeg" alt="image" />
                            <h3>Vijayraaj Subramaniam</h3>
                            <span>Senior Consultant | Capgemini</span>
                            </div>
                            <div className="col-md-8">
                                <p>Sai’s multitasking ability was one of the highest strength irrespective of technology and easy to mingle with other and start the work. I never felt Sai is a junior resource. I am very much impressed about his confidence and situation handling. </p>
                            </div>
                        
                    </div>
                </OwlCarousel> 
            </div>
        </div>
        </div>
    )
}

export default Feedback
