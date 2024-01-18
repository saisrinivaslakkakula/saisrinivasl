import React from 'react'
import { FaUniversity } from 'react-icons/fa'
import { FaBook } from 'react-icons/fa'
import Fade from 'react-reveal/Fade';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const EducationDetails = () => {
    return (
        <div>
            <Card
                src='./uploads/Education_SJSU.jpg'
                titleSmallWord='Small word'
                titleBigWord='Big word'
                color='Overlay color'>
                Whatever text Here
            </Card>
        </div>
    )
}

export default EducationDetails
