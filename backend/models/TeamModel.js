import mongoose from  'mongoose'

const TeamSchema = mongoose.Schema({
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        role:{
            type:String,
            required:true,
        },
        photo:{
            type:String,
            
        },
        FBHandle: {type:String,default:null},
        TwitterHandle: {type:String,default:null
        },
        LinkedInHandle: {type:String,default:null},
        GithubHandle: {type:String},
        About:{type:String,default:null}
        
    },{timestamps:true})

    const Team = mongoose.model('Team',TeamSchema) 
    export default Team
