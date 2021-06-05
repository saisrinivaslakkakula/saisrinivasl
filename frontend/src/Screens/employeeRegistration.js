import FormData from 'form-data'
import React, { useState, useEffect } from 'react'
import TextareaCounter from 'react-textarea-counter';
import imageCompression from 'browser-image-compression';
import PageBanner from '../components/PageBanner';
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { Modal, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { updateTeamDetails } from '../actions/teamActions'
import { getUserDetails } from '../actions/userActions'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css';
import axios from 'axios'



const EmployeeRegistration = ({ history }) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const [src, selectPhoto] = useState(null) // select Photo as blob
    const [photoFile, selectPhotoFile] = useState(null) // select photo as file to get the name
    const [message, setMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const [image, setImage] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)
    const [Result, setResult] = useState(null) // resultant cropped image in Base 64 for display
    const [blobResult, setBlobResult] = useState(null) // resultant cropped image in blob for upload
    const [crop, setCrop] = useState({
        aspect: 1 / 1, width: 125,
        height: 125,

    });
    const [show, setShow] = useState(false);
    const [uploading, setUploading] = useState(false)

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
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    var facebookHandle = ''
    var twitterHandle = ''
    var linkedInHandle = ''
    var about = ''
    //  var role = ''
    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { user, loading, error } = userDetails
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const teamDetails = useSelector(state => state.team)
    const { team, success } = teamDetails


    useEffect(() => {
        //console.log(userInfo)
        if (!userInfo) {
            history.push('/login')
        }
        else {
            if (!user.firstName) {
                dispatch(getUserDetails('profile'))
            }
            else {
                setFirstName(user.firstName)
                setLastName(user.lastName)
                setEmail(user.email)

            }
        }
    }, [history, userInfo, dispatch, user,teamDetails,success,error,team])

    /*const setRole = (e)=>{
        e.preventDefault()
        role = e.target.value

    }*/
    const setFacebookHandle = (e) => {
        e.preventDefault()
        facebookHandle = e.target.value

    }
    const setTwitterHandle = (e) => {
        e.preventDefault()
        twitterHandle = e.target.value

    }
    const setLinkedInHandle = (e) => {
        e.preventDefault()
        linkedInHandle = e.target.value

    }
    const setAbout = (e) => {
        e.preventDefault()
        about = e.target.value

    }



    const handleFileUpload = async (e) => { // get file form <input Tag>
        e.preventDefault()
        selectPhoto(URL.createObjectURL(e.target.files[0]))
        selectPhotoFile(e.target.files[0])
        handleShow()
    }


    const uploadHandler = async (e) => { // after processing upload file to the server
        e.preventDefault()
        const formData = new FormData()
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 125,
            useWebWorker: true
        }


        try {
            const config = {
                'accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            }
            //console.log(config)
            const compressedOutput = await imageCompression(blobResult, options)
            setUploading(true)
            //const fullName = userInfo.firstName+userInfo.lastName
            formData.append('team', compressedOutput, photoFile.name)
            const { data } = await axios.post('/api/upload/teamimages', formData, config)
            //setImageUrl(data)
            setUploading(false)
            return (data)
        } catch (error) {

            //console.error(error)
            setUploading(false)
            setErrorMessage("500 Bad Request. Please try again later")


        }

    }


    const submitHandler = async (e) => { // submit whole form
        //console.log("submit!")
        e.preventDefault()
        try {
            const Img = await uploadHandler(e)
            //console.log("Img:"+Img);
            dispatch(updateTeamDetails({ id: user._id, email, firstName, lastName, role, facebookHandle, twitterHandle, linkedInHandle, about, Img })).then(
                setMessage("Update Success!")
            )
                
        } catch (error) {

            setErrorMessage("500- Internal Server Error.")
        }
    }

    return (
        <div>


            <PageBanner pageTitle="Employee Registration" />

            <div className="ptb-80">
                <div className="container">
                    <div className="auth-form">
                        <div className="auth-head">
                            <Link to={"/"}>
                                <img src="/images/AeehPressLogo.png" />
                            </Link>
                            <p>Employee Registration Form</p>
                        </div>
                        {error && <Message variant='danger'>{error}</Message>}
                        {loading && <Loader variant='danger'></Loader>}
                        {message && <Message variant='success'>Details Updated!</Message>}
                        <Form onSubmit={submitHandler}>
                            <div className="mb-3">
                                <label className="form-label">First Name</label>
                                <input type="text" onChange={(e) => setFirstName(e.target.value)} style={{ cursor: 'not-allowed' }} value={firstName} readonly="readonly" className="form-control" id="firstName" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-control" readonly="readonly" style={{ cursor: 'not-allowed' }} onChange={(e) => setLastName(e.target.value)} value={lastName} id="lastName" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" readonly="readonly" style={{ cursor: 'not-allowed' }} onChange={(e) => setEmail(e.target.value)} value={email} id="email" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Role</label>
                                <input  type="text" required onChange={(e)=>setRole(e.target.value)} className="form-control" id="role" />
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
                                                {uploading && (<Loader></Loader>)}

                                            </div>
                                        ) :
                                            (
                                                <div>
                                                    <Modal show={show} onHide={handleClose}>
                                                        <Modal.Header closeButton>
                                                            <Modal.Title>Modal heading</Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body>

                                                            <ReactCrop src={src} crop={crop} onImageLoaded={setImage} onChange={setCrop} />

                                                        </Modal.Body>
                                                        <Modal.Footer>
                                                            <Button variant="secondary" onClick={handleClose}>
                                                                Close
                                                    </Button>
                                                            <Button variant="primary" onClick={getCroppedImg}>
                                                                Save Changes
                                                    </Button>
                                                        </Modal.Footer>
                                                    </Modal>

                                                </div>
                                            )
                                        }


                                    </div>
                                )}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Facebook Handle</label>
                                <input type="url" onChange={setFacebookHandle} className="form-control" id="FBHandle" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Twitter Handle</label>
                                <input type="url" onChange={setTwitterHandle} className="form-control" id="TwitterHandle" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">LinkedIn Handle</label>
                                <input type="url" onChange={setLinkedInHandle} className="form-control" id="linkedInHandle" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">About Yourself</label>
                                <TextareaCounter required onChange={setAbout} countLimit={400} id="about" />
                            </div>
                            {error && <Message variant='danger'>{error}</Message>}
                            {errorMessage && <Message variant='danger'>{errorMessage}</Message>}
                            {message ?
                                (<div>
                                    <Message variant='success'>{message}</Message>
                                    <Link to={'/'}>
                                        <button className="btn btn-primary">Go To HomePage</button>
                                    </Link>

                                </div>)
                                :
                                <button type="submit" onClick={submitHandler} className="btn btn-primary">Submit</button>
                            }

                        </Form>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default EmployeeRegistration
