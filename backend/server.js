import express, { json } from 'express'
import dotenv from 'dotenv'
import path from 'path'
import connectDB from './config/db.js'
import teamRoutes from './routes/teamRoutes.js'
import  userRoutes from './routes/userRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import {protect} from './middleware/authMiddleWare.js'
import {notFound,errorHandler} from './middleware/errorMiddleware.js'
import bookRoutes from './routes/bookRoutes.js'
dotenv.config()
const app = express()
connectDB()
app.use(express.json())
/**/

app.use('/api/team',teamRoutes)
app.use('/api/users',userRoutes)
app.use('/api/upload',uploadRoutes)
app.use('/api/book',bookRoutes)
const __dirname = path.resolve()
app.use('/uploads',express.static(path.join(__dirname,'/uploads')))
app.use('/uploads/userImages',express.static(path.join(__dirname,'/uploads/userImages')))
if(process.env.NODE_ENV === 'production'){
    
    app.use(express.static(path.join(__dirname,'/frontend/build')))
    app.get('*',(req,res) => res.sendFile(path.resolve(__dirname,'frontend','build','index.html')))
    
}
else{
    app.get('/',(req,res) => {
        res.send("API Running...")
    })
}
app.use(notFound)
app.use(errorHandler)
app.listen(5000,console.log(" Server Running on port 5000"))




