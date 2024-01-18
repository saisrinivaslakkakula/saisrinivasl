import React from 'react'
import { Link } from 'react-router-dom'
import {Container,Row,Col} from 'react-bootstrap'
import WorkTimeline from '../components/WorkTimeline'
import EducationDetails from '../components/EducationDetails'
import { FaUser } from 'react-icons/fa'
import { FaBuilding } from 'react-icons/fa'
import { FaGraduationCap } from 'react-icons/fa'
import PageBanner from '../components/PageBanner'
const About = () => {
    return (
        <div id="aboutMe">
             <PageBanner pageTitle="About Me"/>
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
                                        <p>As a Graduate student in Computer Engineering at San Jose State University, I am driven by my passion for technology and my dedication to my studies. With 3+ years of work experience at Capgemini, a service-based IT company, and an internship at Cisco Systems as a Software Engineer, I have gained valuable skills in building end-to-end web applications and developing micro-services. In fact, I was a key member of the development team for the "NamasteCapgemini" application, which was nominated for the Aegis Grahambell awards in the COVID combat innovation category in 2020.

In addition to my technical expertise, I am also a natural teacher and enjoy sharing my knowledge with others. I have conducted training and workshops at various levels within my organization and am always looking for new opportunities to learn and grow.

Outside of work and school, I have a love for standup comedy and movies. I am open to exploring opportunities in the fields of web/native application development, AI/ML, and cloud computing.</p>
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
