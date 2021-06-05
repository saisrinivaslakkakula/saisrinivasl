import React, { useState, useEffect } from 'react'
import FormData from 'form-data'
import PageBanner from '../components//PageBanner';
import { Link } from 'react-router-dom'
import { Form, Modal, Button } from 'react-bootstrap'
import { register } from '../actions/userActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import ReactCrop from 'react-image-crop'
import imageCompression from 'browser-image-compression';
import axios from 'axios'
const SignUp = ({ location, history }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isAuthor, setIsAuthor] = useState(false)
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
        e.preventDefault()
        selectPhoto(URL.createObjectURL(e.target.files[0]))
        selectPhotoFile(e.target.files[0])
        handleShow()
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
        e.preventDefault()
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
            
        }
       

        
        

    }
    return (
        <div>


            <PageBanner pageTitle="Sign Up" />

            <div className="ptb-80">
                <div className="container">
                    <div className="auth-form">
                        <div className="auth-head">
                            <Link to={"/"}>
                                <img alt="logo" src="/images/AeehPressLogo.png" />
                            </Link>
                            <p>Create a new account</p>
                        </div>
                        <p> Fields marked(*) are mandatory</p>
                        {loading && <Loader variant='danger'></Loader>}
                        <Form onSubmit={submitHandler}>
                            
                            <div className="mb-3">
                                <label className="form-label">First Name(*)</label>
                                <input type="text" required onChange={(e) => setFirstName(e.target.value)} className="form-control" id="firstName" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Last Name(*)</label>
                                <input type="text" required className="form-control" onChange={(e) => setLastName(e.target.value)} id="lastName" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email(*)</label>
                                <input type="email" required onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password(*)</label>
                                <input type="password" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$" className="form-control" onChange={(e) => setPassword(e.target.value)} id="password" />
                                <span>
                                    <ul> Password <u><b>MUST</b></u> contain
                                        <li> 8 Characters</li>
                                        <li> One Upper Case letter</li>
                                        <li> One Lower Case letter</li>
                                        <li> One Special Character/Symbol</li>
                                    </ul>
                                </span>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Confirm Password(*)</label>
                                <input type="password" required className="form-control" onChange={(e) => setConfirmPassword(e.target.value)} id="confirmPassword" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Check here if you are an Author</label>
                                <Form.Check inline label="Author" onChange={(e) => setIsAuthor(e.target.value)} id="isAuthor" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Photo</label>
                                <input type="file" accept="image/*" className="form-control" onChange={handleFileUpload} />
                            </div>

                            <div className="mb-3">
                                {src && (
                                    <div>
                                        {Result ? (
                                            <div>
                                                {errorMessage && <Message variant='danger'> Image not Accepted. Please try again Later </Message>}
                                                {uploading && (<Loader></Loader>) /*: (
                                                    <div>
                                                        {imageUrl ? <p style={{ color: 'green' }}> Image Accepted</p> :
                                                            <div>

                                                                <img src={Result}  alt={"Cropped"}></img>
                                                                <Button variant="danger"  onClick={submitHandler}>upload Image</Button>
                                                            </div>
                                                        }

                                                    </div>
                                                    )*/}

                                            </div>
                                        ) :
                                            (
                                                <div>
                                                    <Modal show={show} onHide={handleClose}>
                                                        <Modal.Header closeButton>
                                                            <Modal.Title>Modal heading</Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body>

                                                            <ReactCrop src={src} crop={crop} locked onImageLoaded={setImage} onChange={setCrop} />

                                                        </Modal.Body>
                                                        <Modal.Footer>
                                                            <Button variant="secondary" onClick={handleClose}>
                                                                Close
                                                        </Button>
                                                        {blobResult?<Button variant="primary">Upload Image</Button>:
                                                        <Button variant="primary" onClick={getCroppedImg}>
                                                        Save Changes
                                                        </Button>
                                                        }
                                                                
                                                        </Modal.Footer>
                                                    </Modal>

                                                </div>
                                            )
                                        }


                                    </div>
                                )}
                            </div>
                
                            {errorMessage&&<Message variant="danger">{errorMessage}</Message>}
                            {message&&<Message variant="primary">{message}</Message>}
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                            
                            
                        </Form>

                        <div className="foot">
                            <p>Already have an account yet? <Link to={"/login"}>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default SignUp;