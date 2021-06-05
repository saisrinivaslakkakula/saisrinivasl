import path from 'path'
import express from 'express'
import multer from 'multer'
const router = express.Router()

const storage = multer.diskStorage({
    destination(req,file,cb){
        cb(null,'uploads/')
    },
    filename(req,file,cb){
        cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
function checkFileType(file,cb) {
    //console.log("FILE:"+JSON.stringify(file, null, 2))
    const fileTypes = /jpg|jpeg|png|tif/
    const extname = fileTypes.test(path.extname(file.originalname).toLocaleLowerCase())
    const mimetype = fileTypes.test(file.mimetype)
    if(extname&&mimetype)
      return cb(null,true)
    else
      cb("Images only!")
}
const upload = multer({
    storage,
    fileFilter:function(req,file,cb){
        checkFileType(file,cb)
    }
}
)

router.post('/',upload.single('image'),(req,res)=>{    
    res.send(`/${req.file.path}`)
})

router.post('/userimages',upload.single('user'),(req,res)=>{
     res.send(`/${req.file.path}`)
 })
 router.post('/teamimages',upload.single('team'),(req,res)=>{
    res.send(`/${req.file.path}`)
})

router.post('/bookimages',upload.single('book'),(req,res)=>{
    res.send(`/${req.file.path}`)
})
export default router