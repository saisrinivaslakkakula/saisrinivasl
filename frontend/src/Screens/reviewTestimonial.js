import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col,Row,Container,FormControl,Form} from 'react-bootstrap'
import PageBanner from '../components/PageBanner'
import {getFeedbackByEmail} from '../actions/userActions'
import Message from '../components/Message'
const ReviewTestimonial = () => {
    const [errorMessage, setErrorMessage] = useState(null)
    const [message, setMessage] = useState(null)
    const [feedbackArray, setFeedbackArray] = useState([])
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(email){
            dispatch(getFeedbackByEmail(email))
        }
    }
    const dispatch = useDispatch()
    const FeedbackResult= useSelector(state => state.getFeedbackByEmail)
    const { feedback, loading, error } = FeedbackResult
    useEffect(() => {
        setErrorMessage(error)
        if(feedback){
            setFeedbackArray(feedback)
        }
        
}, [ feedback,error,loading])
    const [email, setEmail] = useState('')
    return (
        <div>
             <PageBanner pageTitle="Review Testimonial"/>
             <Container className="ptb-80">
                    {errorMessage && <Message variant="danger">{errorMessage}</Message>}
                    <Form onSubmit={handleSubmit}>
                    <Row>
                    <Col md={2}> 
                    <label> Enter your Email:</label>
                    </Col>
                    <Col md={4}> 
                        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Please provide the email used to submit the testimonial" className="form-control"></input>
                    </Col>
                    <Col md={4}> 
                        <button type="submit" className="btn btn-primary"> Check</button>
                    </Col>
                    </Row>
                    </Form>
                    {feedbackArray.length >0 &&
                    <p> Feedback came!</p>
                    }
                    
             </Container>
            
        </div>
    )
}

export default ReviewTestimonial
