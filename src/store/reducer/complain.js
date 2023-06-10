import * as actions from '../action/complain.js'

export const initialState={
    loading : false,
    hasError : false,
    data : []
}


export default function complains(state = initialState, action){
    switch(action.type){
        case actions.GET_DATA:
            return{ ...state, loading:true }
        case actions.GET_DATA_SUCCESS:
            return{data: action.payload, loading:false, hasError:false}
        case actions.GET_DATA_FAILURE:
            return{...state , loading:false ,  hasError:true}
        default :
            return state
    }

}