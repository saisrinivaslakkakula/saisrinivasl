import React, { useState, useEffect } from 'react'
import FormData from 'form-data'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import ReactCrop from 'react-image-crop'
import {register} from '../actions/userActions'
import imageCompression from 'browser-image-compression';
import {Link} from 'react-router-dom'
import { Form, Modal, Button } from 'react-bootstrap'
import axios from 'axios'
const Recommend = ({ location, history }) => {
    const [Name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [Role, setRole] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [testimonial, setTestimonial] = useState('')
    const [src, selectPhoto] = useState(null) // select Photo as blob
    const [photoFile, selectPhotoFile] = useState(null) // select photo as file to get the name
    const [message, setMessage] = useState(null)
    const [image, setImage] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const [Result, setResult] = useState(null) // resultant cropped image in Base 64 for display
    const [blobResult, setBlobResult] = useState(null) // resultant cropped image in blob for upload
    const [crop, setCrop] = useState({
        aspect: 1 / 1,
        height: 200,
        width:200

    })
    const [show, setShow] = useState(false);
    const [uploading, setUploading] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


    const dispatch = useDispatch()
    const addFeedback = useSelector(state => state.addFeedback)
    const { feedback, loading, error } = addFeedback
    useEffect(() => {
            setErrorMessage(error)
            if(feedback){
                setMessage("Thanks for taking your time and giving your valuable feedback. Your feedback will be published once the moderator reviews it.")
            }
    }, [history, feedback,error])




    const handleFileUpload = (e) => { // get file form <input Tag>
        e.preventDefault()
        selectPhoto(URL.createObjectURL(e.target.files[0]))
        selectPhotoFile(e.target.files[0])  
    }



    const getCroppedImg = async (e) => {
        e.preventDefault()

        const canvas = document.createElement('canvas')
        const scaleX = image.naturalWidth / image.width
        const scaleY = image.naturalHeight / image.height
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');
        //console.log(crop)
        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        )
        const base64Image = canvas.toDataURL('image/jpeg')
        setResult(base64Image)

        canvas.toBlob(blob => {
            setBlobResult(blob)
        })
        handleClose()
        //uploadHandler(e)

    }

    const uploadHandler = async (e) => { // after processing upload file to the server
        e.preventDefault()
        const formData = new FormData()

        try {
            const config = {
                'accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            }
            setUploading(true)
            formData.append('user', photoFile, photoFile.name)
            const { data } = await axios.post('/api/upload/userimages', formData, config)
            setUploading(false)
            return (data)
            


        } catch (error) {

            console.error(error)
            setUploading(false)
            setErrorMessage("Image Upload Failed! Please try again later.")


        }

    }


    const submitHandler = async (e) => {
         e.preventDefault()
         var Img = null
         try {
 
            if(photoFile){
              Img = await uploadHandler(e)
            }
           if((photoFile&&(Img)))
                dispatch(register(Name,email,companyName,Role,Img,testimonial)
             )
            else{
                
                setErrorMessage("Error! Please try again later")
            }
            
             
         } catch (error) {
            console.error(error)
             setErrorMessage(error)
             
         }
        
    }



    return (
        <div>

            <div className="ptb-80">
                <div className="container">
                    <div className="auth-form">
                        <div className="auth-head">
                            
                            <p>Submit Testimonial</p>
                        </div>
                        {loading && <Loader variant='danger'></Loader>}
                        {errorMessage&&<Message variant="danger">{errorMessage}</Message>}
                        {!message 
                        ?
                        <Form onSubmit={submitHandler}>
                            
                        <div className="mb-3">
                            <label className="form-label">First Name(*)</label>
                            <input type="text" required onChange={(e) => setName(e.target.value)} className="form-control" id="name" />
                        </div>
                       
                        <div className="mb-3">
                            <label className="form-label">Email(*)</label>
                            <input type="email" required onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Company Name(*)</label>
                            <input type="text" placeholder="Company/work place where we worked together" required onChange={(e) => setCompanyName(e.target.value)} className="form-control" id="company" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Role/Designation(*)</label>
                            <input type="text"  required onChange={(e) => setRole(e.target.value)} className="form-control" id="role" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Photo</label>
                            <input type="file"  accept="image/*" className="form-control" onChange={handleFileUpload} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Your Testimonial(*)</label>
                            <textarea rows="5" type="text"  required onChange={(e) => setTestimonial(e.target.value)} className="form-control" id="role" />
                        </div>

                        
            
                        {errorMessage&&
                        (
                            <div>
                                <Message variant="danger">{errorMessage}</Message>
                                <Link to="/reviewTestimonial">
                                <button className="btn btn-secondary"> Review Testimonial</button>
                                </Link>
                                
                            </div>
                        
                        
                        )
                        }
                        {message&&<Message variant="primary">{message}</Message>}
                        <button type="submit" className="btn btn-primary">Submit</button>
                        
                        
                    </Form>
                         :
                         <div className="auth-form">
                             <h1> 
                                 <Message variant="primary">{message}</Message> 
                                 <Link to="/">
                                 <button className="btn btn-primary">Go To HomePage</button>
                                 </Link>
                                 
                            </h1>
                        </div>
                        }
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Recommend
