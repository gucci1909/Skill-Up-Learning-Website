import { ERROR_LOGIN, LOADING_LOGIN, POST_LOGIN } from "./login.types"

const initialState = {
    isAuth : false,
    token : "",
    loading:false,
    error:false
}
export const loginReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case POST_LOGIN:
            return {
                ...state,
                isAuth:true,
                token : payload.token,
                loading:false,
                error:false

            }
        case LOADING_LOGIN:
            return {
                ...state,
                loading:true,
                error:false

            }
        case ERROR_LOGIN:
            return {
                ...state,
                loading:false,
                error:true
            }
        default:
            return state;
    }

}