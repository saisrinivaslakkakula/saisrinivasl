import mongoose from  'mongoose'
import bcrypt from 'bcryptjs'
const feedbackSchema = mongoose.Schema({
        Name:{
            type:String,
            required:true
        },
        
        email:{
            type:String,
            required:true
            
        },
        companyName:{
            type:String,
            required:true
        },
        Role:{
            type:String,
            required:true
        },
       photoPath:{
            type:String,
            default:null
        },
        Approved:{
            type:Boolean,
        },

        testimonial:{
            type:String,
            default:null
        }


    },{timestamps:true})


    const Feedback = mongoose.model('Feedback',feedbackSchema) 
    export default Feedback
