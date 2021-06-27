import Feedback from '../models/feedbackModel.js'
import asyncHandler from 'express-async-handler'
const addFeedback = asyncHandler(async (req,res)=>{
    //console.log(req.body)
   const {Name,email,companyName,Role,photoPath,testimonial} = req.body 
   const feedbackExists = await Feedback.findOne({email})
       if(feedbackExists){

        res.status("400")
        throw new Error ("Hello, I appreciate your effort to recommend me.However, the testimonial record with the same emailID has already been submitted. Please click on Review testimonial link to Edit your testimonial.")          
       }
       else{
        
        const feedback =  await Feedback.create({
            Name,
            email,
            companyName,
            Role,
            photoPath,
            testimonial,
            Approved:false,
        })

        if(feedback){
        res.status(201).json(
            {
            _id:feedback._id,
            name:feedback.name,
            email : feedback.email,
            testimonial:feedback.testimonial,
            }
        )
    }
    else{
        res.status("400")
        throw new Error ("400 Bad Request: Please try again later. ")
    }

       }
})


const getFeedbackByEmail = asyncHandler(async (req,res)=>{
    const feddbackByEmail = await Feedback.find({email:req.body.email})
    if(feddbackByEmail){
        res.send(feddbackByEmail)
        /*res.json({
             _id:user._id,
             firstName:user.firstName,
             lastName:user.lastName,
             email:user.email,
             isAdmin : user.isAdmin,
             isEmployee: user.isEmployee,
             isAuthor: user.isAuthor,
          
         })*/
  
    }
    else{
        res.status('404')
        throw new Error ("email Not Found. Please try again")
    }
    
  })


  const getAllFeedbacks = asyncHandler(async (req,res)=>{
    const feddbackByEmail = await Feedback.find()
    if(feddbackByEmail){
        res.send(feddbackByEmail)
        
  
    }
    else{
        res.status('404')
        throw new Error ("email Not Found. Please try again")
    }
    
  })

export {addFeedback,getFeedbackByEmail,getAllFeedbacks} 