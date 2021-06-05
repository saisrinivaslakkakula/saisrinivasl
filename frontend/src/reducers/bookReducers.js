import {BOOK_REGISTER_REQUEST,BOOK_REGISTER_SUCCESS,BOOK_REGISTER_FAIL,
    AUTHOR_BOOK_DETAILS_REQUEST,
    AUTHOR_BOOK_DETAILS_SUCCESS,
    AUTHOR_BOOK_DETAILS_FAIL
} from '../constants/bookConstants'
const bookUploadReducer = (state = {books:{}},action) =>{

    switch(action.type){
        case BOOK_REGISTER_REQUEST:
            return({...state,loading:true})
        case BOOK_REGISTER_SUCCESS:
            return({loading:false,books:action.payload})
        case BOOK_REGISTER_FAIL:
            return({loading:false, error:action.payload})
        default:
                return state

    }

}

const authorBookDetailsReducer = (state = {books:{}},action) =>{

    switch(action.type){
        case AUTHOR_BOOK_DETAILS_REQUEST:
            return({...state,loading:true})
        case AUTHOR_BOOK_DETAILS_SUCCESS:
            return({loading:false,books:action.payload})
        case AUTHOR_BOOK_DETAILS_FAIL:
            return({loading:false, error:action.payload})
        default:
                return state

    }

}

export {bookUploadReducer,authorBookDetailsReducer}