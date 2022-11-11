import { DELETE_ERROR, DELETE_LOADING, DELETE_SUCCESS, GET_ERROR, GET_LOADING, GET_SUCCESS, PATCH_ERROR, PATCH_LOADING, PATCH_SUCCESS, POST_ERROR, POST_LOADING, POST_SUCCESS } from "./products.types"

const initialState = {
    loading : false,
    error : false,
    data : [],
}

export const productReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case GET_LOADING:
            return {
                ...state,
                loading:true,
                error:false
            }
        case POST_LOADING:
            return {
                ...state,
                loading:true,
                error:false
            }
        case PATCH_LOADING:
            return {
                ...state,
                loading:true,
                error:false
            }
        case DELETE_LOADING:
            return {
                ...state,
                loading:true,
                error:false
            }
        case GET_ERROR:
            return {
                ...state,
                loading:false,
                error:true
            }
        case POST_ERROR:
            return {
                ...state,
                loading:false,
                error:true
            }
        case PATCH_ERROR:
            return {
                ...state,
                loading:false,
                error:true
            }
        case DELETE_ERROR:
            return {
                ...state,
                loading:false,
                error:true
            }
        case GET_SUCCESS:
            return {
                ...state,
                loading:false,
                error:false,
                data:payload.databases
            }
        case POST_SUCCESS:
            return {
                ...state,
                loading:false,
                error:false
            }
        case PATCH_SUCCESS:
            return {
                ...state,
                loading:false,
                error:false
            }
        case DELETE_SUCCESS:
            return {
                ...state,
                loading:false,
                error:false
            }
        default:
            return state
    }
}