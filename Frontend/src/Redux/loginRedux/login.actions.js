import { ERROR_LOGIN, LOADING_LOGIN, POST_LOGIN } from "./login.types";
import axios from "axios"
export const post_login = (login_credentials) => async(dispatch)=>{
    dispatch({type:LOADING_LOGIN})
    try {
        const res = await axios.post(`https://signup-login-api.onrender.com/user/login`,login_credentials);
        const data = res.data;
        console.log(data);
        return dispatch({type:POST_LOGIN,payload:data});
        
    } catch (error) {
        dispatch({type:ERROR_LOGIN});
        
    }
}