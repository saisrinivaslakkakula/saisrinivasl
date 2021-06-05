import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import  {composeWithDevTools} from 'redux-devtools-extension'
import {userLoginReducer,userRegisterReducer,userDetailsReducer} from './reducers/userReducers'
import {teamUpdateReducer} from './reducers/teamReducers'
import {bookUploadReducer,authorBookDetailsReducer} from './reducers/bookReducers'

const userInfoFromStorage = localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null
const reducer = combineReducers({
    userLogin : userLoginReducer,
    userRegister : userRegisterReducer,
    userDetails:userDetailsReducer,
    team:teamUpdateReducer,
    book:bookUploadReducer,
    authorBooks:authorBookDetailsReducer,

})
const initialState = {
    userLogin: {
        userInfo:userInfoFromStorage,
    } 
}
const middleWare = [thunk]
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
   

)

export default store