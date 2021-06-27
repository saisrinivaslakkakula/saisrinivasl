import React from 'react'
import { Link } from 'react-router-dom'
import {Container,Row,Col} from 'react-bootstrap'
import WorkTimeline from '../components/WorkTimeline'
import EducationDetails from '../components/EducationDetails'
import { FaUser } from 'react-icons/fa'
import { FaBuilding } from 'react-icons/fa'
import { FaGraduationCap } from 'react-icons/fa'

const About = () => {
    return (
        <div id="aboutMe">
            <div className="team-area ptb-80 bg-f9f6f6">
                <div className="container">
                    <Container >
                        <Row >
                            <Col lg={3}>
                                <p className="article-image">
                                    <h4> <FaUser/> ABOUT ME</h4>
                                </p>
                                
                            </Col>
                            <Col >
                                <div className="article-content">
                                    <blockquote>
                                        <p>I am a Graduate student pursuing my Master’s in Computer Engineering. I am persistent, dedicated, and needless to say a tech enthusiast. I have a prior work experience of 3+ years in a service-based IT company called Capgemini. My work included building end-to-end web applications that especially involve application modernization and digital transformation of Legacy systems.

I was an integral part of the development team of the "NamasteCapgemini" application which got nominated to Aegis Grahambell awards in the COVID combat innovation category in the year 2020.

I love to learn and teach new things. I have had experience in conducting training and workshops at different levels within the organization. Apart from being a techie, I love doing standup comedy and watching movies.

I am open to opportunities in the field of web/native application development, AI/ML, and cloud computing.</p>
                                    </blockquote>
                                    
                                </div>
                            </Col>
                        </Row>
                        <Row>
                        <Col> 
                        <h4> <FaBuilding/> WORK HISTORY</h4>
                        <WorkTimeline/>
                        </Col>
                        </Row>
                        <Row>
                        <Col> 
                        <h4> <FaGraduationCap/> EDUCATION DETAILS</h4>
                        <EducationDetails/>
                        </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default About
