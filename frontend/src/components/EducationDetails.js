import React from 'react'
import { FaUniversity } from 'react-icons/fa'
import { FaBook } from 'react-icons/fa'
import Fade from 'react-reveal/Fade';
const EducationDetails = () => {
    return (
        <div>
            <Fade>
            <div className="row education-snippet">
                    <ul className="education-snippet-details"> <FaBook/> Master of Science, Computer Engineering
                    <li> &emsp; San Jose State University | 2021 - present</li>
                    </ul>     
            </div>
            </Fade>
            <Fade>
            <div className="row education-snippet">
                    <ul className="education-snippet-details"> <FaBook/> Bachelor of Technology, Electronics and Instrumentation Engineering
                    <li> &emsp; Bapatla Engineering College | 2013 - 2017</li>
                    </ul>     
            </div>
            </Fade>
        </div>
    )
}

export default EducationDetails
