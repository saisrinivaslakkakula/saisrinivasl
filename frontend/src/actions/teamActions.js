import {TEAM_UPDATE_REQUEST,TEAM_UPDATE_SUCCESS,TEAM_UPDATE_FAIL} from '../constants/teamConstants'
import axios from 'axios'
export const updateTeamDetails = (user) => async(dispatch,getState) =>{
    //console.log(user)
    try {
        dispatch({
            type:TEAM_UPDATE_REQUEST
        })
     
        const {userLogin} = getState()
        const {userInfo} = userLogin
        const config = {
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            }
        }
        const {data} = await axios.put(`/api/team/employeeRegistration`,user,config)
         dispatch({
            type : TEAM_UPDATE_SUCCESS,
            payload:data,
        })
       
        
    } catch (error) {

         dispatch({
            type:TEAM_UPDATE_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message: error.message
        }) 
    }
}
