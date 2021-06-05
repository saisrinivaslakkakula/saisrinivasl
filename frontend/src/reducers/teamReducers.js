import {TEAM_UPDATE_REQUEST,TEAM_UPDATE_SUCCESS,TEAM_UPDATE_FAIL} from '../constants/teamConstants'
const teamUpdateReducer = (state = {team:{}},action) =>{

    switch(action.type){
        case TEAM_UPDATE_REQUEST:
            return({...state,loading:true})
        case TEAM_UPDATE_SUCCESS:
            return({loading:false,team:action.payload})
        case TEAM_UPDATE_FAIL:
            return({loading:false, team:action.payload})
        default:
                return state

    }

}

export {teamUpdateReducer}