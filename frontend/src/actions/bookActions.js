import {BOOK_REGISTER_SUCCESS,BOOK_REGISTER_REQUEST,BOOK_REGISTER_FAIL,
    AUTHOR_BOOK_DETAILS_REQUEST,
    AUTHOR_BOOK_DETAILS_SUCCESS,
    AUTHOR_BOOK_DETAILS_FAIL
} from '../constants/bookConstants'
import axios from 'axios'
export const addBookDetails = (book) => async(dispatch,getState) =>{
    console.log(book)
    try {
        dispatch({
            type:BOOK_REGISTER_REQUEST
        })
     
        const {userLogin} = getState()
        const {userInfo} = userLogin
        const config = {
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            }
        }
        const {data} = await axios.post(`/api/book/`,book)
        //console.log("Data:"+data)
         dispatch({
            type : BOOK_REGISTER_SUCCESS,
            payload:data,
        })
       
        
    } catch (error) {
        console.log(error)
         dispatch({
            type:BOOK_REGISTER_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message: error.message
        }) 
    }
}


export const getAuthorBookDetails = () => async(dispatch,getState) =>{
    try {
        dispatch({
            type:AUTHOR_BOOK_DETAILS_REQUEST
        })
     
        const {userLogin} = getState()
        const {userInfo} = userLogin
        const config = {
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            }
        }
        const id = userInfo.email
        const {data} = await axios.post('/api/book/getBooks',{id:userInfo.email},config)
         dispatch({
            type : AUTHOR_BOOK_DETAILS_SUCCESS,
            payload:data,
        })
       
        
    } catch (error) {

         dispatch({
            type:AUTHOR_BOOK_DETAILS_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message: error.message
        }) 
    }
}