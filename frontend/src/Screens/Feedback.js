import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OwlCarousel from 'react-owl-carousel3';
import PageBanner from '../components/PageBanner'
import Recommend from '../components/Recommend'
import { getAllFeedback, getFeedbackByEmail } from '../actions/userActions'
import Loader from '../components/Loader';
import Message from '../components/Message';
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
    const scrollToDiv = (ref) => window.scrollTo(0, 500);
    const [feedbackArray, setFeedbackArray] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const dispatch = useDispatch()
    const allFeedbacks = useSelector(state => state.getAllFeedbacks)
    const { feedback, loading, error } = allFeedbacks
    useEffect(() => {
        dispatch(getAllFeedback())


    }, [dispatch, error])
    return (
        <div>
            <PageBanner pageTitle="Testimonials" />
            <div className="ml-feedback-area ptb-80">
                <div className="container">


                    {loading && (
                        <Loader />
                    )}
                    {!feedback
                        ?
                        error ?
                            <Message variant="danger"> {error}</Message>
                            :
                            <Message variant="primary"> No Testimonials data Found at this time.</Message>
                        :
                        <OwlCarousel
                            className="ml-feedback-slides owl-carousel owl-theme"
                            {...options}
                        >
                            {

                                feedback.length > 0 && (
                                    feedback.filter(feedbackObj => feedbackObj.Approved == true).map((feedbackObj) => (
                                       
                                        <div className="row single-ml-feedback-item ">
                                            <div className="col-md-4">
                                                <img src={feedbackObj.photoPath} alt="image" />
                                                <h3>{feedbackObj.Name}</h3>
                                                <span>{feedbackObj.Role} | {feedbackObj.companyName}</span>
                                            </div>
                                            <div className="col-md-8">
                                                <p>{feedbackObj.testimonial}</p>
                                            </div>
                                        </div>

                                    ))
                                )

                            }

                            {/*<div className="row single-ml-feedback-item ">
                                <div className="col-md-4">
                                    <img src="/images/client-image/Vijayraaj.jpeg" alt="image" />
                                    <h3>Vijayraaj Subramaniam</h3>
                                    <span>Senior Consultant | Capgemini</span>
                                </div>
                                <div className="col-md-8">
                                    <p>Sai’s multitasking ability was one of the highest strength irrespective of technology and easy to mingle with other and start the work. I never felt Sai is a junior resource. I am very much impressed about his confidence and situation handling. </p>
                                </div>
                        </div>*/}
                            <div className="row single-ml-feedback-item ">
                                <div className="col-md-4"> </div>
                                <div className="col-md-4">
                                    <a>
                                        <button className="btn btn-primary"
                                            onClick={() => scrollToDiv()}
                                        >
                                            Click here to add your Testimonial
                                        </button>
                                    </a>
                                </div>

                            </div>
                        </OwlCarousel>
                    }
                </div>
            </div>
            <Recommend />
        </div>
    )
}

export default Feedback
