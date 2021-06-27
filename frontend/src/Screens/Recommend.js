import React, { useState, useEffect } from 'react'
import FormData from 'form-data'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import ReactCrop from 'react-image-crop'
import imageCompression from 'browser-image-compression';
import { Form, Modal, Button } from 'react-bootstrap'
import axios from 'axios'
const Recommend = ({ location, history }) => {
    const [Name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
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
        aspect: 1 / 1, width: 400,
        height: 400,

    });
    const [show, setShow] = useState(false);
    const [uploading, setUploading] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const redirect = location.search ? location.search.split("=")[1] : '/'
    const dispatch = useDispatch()
    const userRegister = useSelector(state => state.userRegister)
    const { userInfo, loading, error } = userRegister
    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect,error])




    const handleFileUpload = (e) => { // get file form <input Tag>
        /*e.preventDefault()
        alert("SRC"+src)
        selectPhoto(URL.createObjectURL(e.target.files[0]))
        selectPhotoFile(e.target.files[0])
        
        handleShow()*/
        alert("hi")
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
            const fullName = firstName+lastName
            //console.log(fullName)
            formData.append('user', blobResult, photoFile.name)
            const { data } = await axios.post('/api/upload/userimages', formData, config)
            //setImageUrl(data)
            setUploading(false)
            return(data)
        

        } catch (error) {

            //console.error(error)
            setUploading(false)
            setErrorMessage("Image Upload Failed! Please try again later.")


        }

    }


    const submitHandler = async (e) => {
       /* e.preventDefault()
        var Img = null
        try {

           if(photoFile){
             Img = await uploadHandler(e)
           }
           
           if (password !== confirmPassword){
            setErrorMessage("Passwords Do Not Match")
            //throw new Error("Passwords Do Not Match!")
           }
           
          if(!photoFile || (photoFile&&(Img)))
            dispatch(register(firstName, lastName, email, password,Img,isAuthor)).then(
                setMessage("Registration Success")
            )
           else{
               setErrorMessage("Error! Please try again later")
           }
           
            //console.log(Img)
           
            
        } catch (error) {
            setErrorMessage("Error! Please fill out all the mandatory details.")
            
        }*/
        alert("sadas")
    }



    return (
        <div>
            
            <div className="contact-area ptb-80">
                <div className="container">
                    
                        <h1 style={{textAlign:'center'}}>Add your Recommendation</h1>
                        <div style={{marginTop:'3%',fontSize:'20px',textAlign:'center'}} >
                        <p>Ever felt that working with me was/is a good experience?</p>
                        <p>If so, my page is open for your appreciation. Please take a minuite of your valuable time to fill in this form below. </p>
                        </div>
                    <div className="row align-items-center">
                            <form id="contactForm" onSubmit={submitHandler} >
                                <div className="row" style={{fontSize:'20px',margin:'5%'}}>
                                <div className="col-lg-2 col-md-2">
                                    <label>Name:</label>
                                </div>
                                    <div className="col-lg-10 col-md-10">
                                        <div className="form-group">
                                            <input required
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                className="form-control"
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                            <div className='invalid-feedback' style={{ display: 'block' }}>
                                                {/*errors.name && 'Name is required.'*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2">
                                    <label>Email:</label>
                                    </div>
                                    <div className="col-lg-10 col-md-10">
                                        <div className="form-group">
                                            <input required
                                                type="text"
                                                name="email"
                                                placeholder="Your email address"
                                                className="form-control"
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <div className='invalid-feedback' style={{ display: 'block' }}>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2">
                                    <label>Company Name:</label>
                                    </div>
                                    <div className="col-lg-10 col-md-10">
                                        <div className="form-group">
                                            <input required
                                                type="text"
                                                name="subject"
                                                placeholder="Company/place in which we worked together "
                                                className="form-control"
                                                onChange={(e) => setCompanyName(e.target.value)}
                                            />
                                            <div className='invalid-feedback' style={{ display: 'block' }}>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2">
                                    <label>Role/Designation:</label>
                                    </div>
                                    <div className="col-lg-10 col-md-10">
                                        <div className="form-group">
                                            <input required
                                                type="text"
                                                name="number"
                                                placeholder="Your Role/Designation"
                                                className="form-control"
                                                onChange={(e) => setRole(e.target.value)}
                                            />
                                            <div className='invalid-feedback' style={{ display: 'block' }}>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2">
                                    <label>Photo:</label>
                                    </div>
                                    <div className="col-lg-10 col-md-10">
                                        <div className="form-group">
                                        <input type="file" required accept="image/*" className="form-control" onChange={handleFileUpload} />
                                            <div className='invalid-feedback' style={{ display: 'block' }}>

                                            </div>
                                        </div>
                                        <div className="mb-3">
                                {src && console.log("src")}
                            </div>

                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea required
                                                name="text"
                                                cols="30"
                                                rows="5"
                                                placeholder="Write your message..."
                                                className="form-control"

                                            />
                                            <div className='invalid-feedback' style={{ display: 'block' }}>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-sm-12">
                                        <button type="submit" className="btn btn-primary">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Recommend
