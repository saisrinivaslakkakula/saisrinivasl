import React,{ useState, useEffect } from 'react'
import ReactCrop from 'react-image-crop'
const TestCrop = () => {
    const [src, selectPhoto] = useState(null) // select Photo as blob
    const [photoFile, selectPhotoFile] = useState(null) 
    const [image, setImage] = useState(null)
    const [crop, setCrop] = useState({
        aspect: 1 / 1,
        height: 200,
        width:200

    })
    const handleFileUpload = (e) => { // get file form <input Tag>
        e.preventDefault()
        selectPhoto(URL.createObjectURL(e.target.files[0]))
        selectPhotoFile(e.target.files[0])
        
    }
    return (
        <div className="ptb-80">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <input type="file" className="form-control" onChange={handleFileUpload}/>
                        {src && (
                                            
                                            <ReactCrop src={src} locked crop={crop}  onImageLoaded={setImage} onChange={setCrop} />
                                            )
                        }
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default TestCrop
