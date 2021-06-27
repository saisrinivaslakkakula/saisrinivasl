import {
     ADD_TESTIMONIAL_REQUEST, ADD_TESTIMONIAL_SUCCESS, 
    ADD_TESTIMONIAL_FAIL, GET_TESTIMONIAL_BY_EMAIL_REQUEST, 
     GET_TESTIMONIAL_BY_EMAIL_SUCCESS, GET_TESTIMONIAL_REQUEST, GET_TESTIMONIAL_SUCCESS, 
     GET_TESTIMONIAL_FAIL,
     GET_TESTIMONIAL_BY_EMAIL_FAIL} from '../constants/userConstants'
import axios from 'axios'


export const register = (Name,email,companyName,Role,Img,testimonial) => async(dispatch) =>{
    try {
        dispatch({
            type:ADD_TESTIMONIAL_REQUEST
        })
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        const {data} = await axios.post('https://saisrinivasl.herokuapp.com/api/feedback/',{Name,email,companyName,Role,photoPath:Img,testimonial},config)
        
         dispatch({
            type : ADD_TESTIMONIAL_SUCCESS,
            payload:data,
        })
 
        
    } catch (error) {
        
         dispatch({
            type:ADD_TESTIMONIAL_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message: error.message
        }) 
    }
}

export const getFeedbackByEmail = (email) => async(dispatch) =>{
    try {
        dispatch({
            type:GET_TESTIMONIAL_BY_EMAIL_REQUEST
        })
     
        const config = {
            headers: {
                'Content-Type':'application/json',
            }
        }
        const {data} = await axios.post('https://saisrinivasl.herokuapp.com/api/feedback/getFeedbackByEmail/',{email},config)
        
         dispatch({
            type : GET_TESTIMONIAL_BY_EMAIL_SUCCESS,
            payload:data,
        })
       
        
    } catch (error) {

         dispatch({
            type:GET_TESTIMONIAL_BY_EMAIL_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message: error.message
        }) 
    }
}

export const getAllFeedback = () => async(dispatch) =>{
    try {
        dispatch({
            type:GET_TESTIMONIAL_REQUEST
        })

        const {data} = await axios.get('https://saisrinivasl.herokuapp.com/api/feedback/getAllFeedbacks/')
         dispatch({
            type : GET_TESTIMONIAL_SUCCESS,
            payload:data,
        })
       
        
    } catch (error) {

         dispatch({
            type:GET_TESTIMONIAL_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message: error.message
        }) 
    }
}


