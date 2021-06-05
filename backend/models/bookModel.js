import mongoose from 'mongoose'
const bookSchema = mongoose.Schema({
    bookName: {
        type:String,
        required:true
    },
    ISBN:{
        type:String
    },
    authorDetails:{
        authorFirstName: {
                type:String,
                required:true,
            },
        authorLastName: {
            type:String,
            required:true,
        },
        authoremail: {
            type:String,
            required:true,
        },

    },
    bookImage:{
        type:String,
    },
    bookRating:{
        type:Number
    },
    bookReviewsNumber:{
        type:Number
    },
    bookReviews:[
        {
            reviewerEmail:{
                type:String
            },
            reviewerfirstName:{
                type: String
            },
            reviewerLastName:{
                type: String
            },
            review:{
                type: String
            },

        }
    ],
    bookAbout:{
        type:String,
        required:true
    }

},{timestamps:true})

const Book = mongoose.model('Book',bookSchema) 
export default Book