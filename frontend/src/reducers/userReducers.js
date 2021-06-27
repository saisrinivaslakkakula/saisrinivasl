import { ADD_TESTIMONIAL_REQUEST, ADD_TESTIMONIAL_SUCCESS, ADD_TESTIMONIAL_FAIL, 
    GET_TESTIMONIAL_BY_EMAIL_REQUEST, GET_TESTIMONIAL_BY_EMAIL_SUCCESS,
     GET_TESTIMONIAL_BY_EMAIL_FAIL, GET_TESTIMONIAL_REQUEST, GET_TESTIMONIAL_SUCCESS,
      GET_TESTIMONIAL_FAIL} from '../constants/userConstants'

const addFeedbackReducer = (state = {},action) =>{

    switch(action.type){
        case ADD_TESTIMONIAL_REQUEST:
            return({loading:true})
        case ADD_TESTIMONIAL_SUCCESS:
            return({loading:false,feedback:action.payload})
        case ADD_TESTIMONIAL_FAIL:
            return({loading:false, error:action.payload})
        default:
                return state

    }

}

const getFeedbackByEmail = (state = {feedback:{}},action) =>{

    switch(action.type){
        case GET_TESTIMONIAL_BY_EMAIL_REQUEST:
            return({loading:true})
        case GET_TESTIMONIAL_BY_EMAIL_SUCCESS:
            return({loading:false,feedback:action.payload})
        case GET_TESTIMONIAL_BY_EMAIL_FAIL:
            return({loading:false, error:action.payload})
        default:
                return state

    }

}

const getAllFeedbacks = (state = {feedback:{}},action) =>{

    switch(action.type){
        case GET_TESTIMONIAL_REQUEST:
            return({loading:true})
        case GET_TESTIMONIAL_SUCCESS:
            return({loading:false,feedback:action.payload})
        case GET_TESTIMONIAL_FAIL:
            return({loading:false, error:action.payload})
        default:
                return state

    }

}



export {getAllFeedbacks,addFeedbackReducer,getFeedbackByEmail}