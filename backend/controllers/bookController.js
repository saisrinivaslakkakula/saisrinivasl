import Book from '../models/bookModel.js'
import asyncHandler from 'express-async-handler'
//@desc   get book details
//@Route  GET /api/book/getDetails
//access  public

const getUserBookDetails = asyncHandler(async (req,res)=>{
    const queryBuilder = {"authorDetails.authoremail":req.body.id}
    const book = await Book.find(queryBuilder)
    if(book){
        /*res.status(201).json(
            { 
           bookName,
           ISBN,
           authorDetails,
           bookImage,
            }
        )*/
        res.send(book)
  
    }
    else{
        res.status('404')
        throw new Error ("user Not Found. Please try again")
    }
 })

 //@desc   create Book
//@Route  POST /api/book/
//access  Public
const createBook = asyncHandler(async (req,res)=>{
    //console.log(req.body)
   const {bookName,ISBN,authorDetails,bookImage,bookAbout} = req.body // get the data from request body which is in json and put it in variables called user and password
   const bookExists = await Book.findOne({ISBN})
   if(bookExists)
    {
        res.status("400")
        throw new Error ("User Already exists")
    }
    else
    {

        //res.send(req.body)
       
       const book =  await Book.create({
           bookName,
           ISBN,
           authorDetails,
           bookAbout,
           bookImage,
           
       }) 

       if(book){
        res.status(201).json(
            {
            _id:book._id,
           bookName:book.bookName,
           ISBN:book.ISBN,
            }
        )
    }
    else{
        res.status("400")
        throw new Error ("400 Bad Request: Please try again later. ")
    }
    }

    
   
})

export {getUserBookDetails,createBook} 