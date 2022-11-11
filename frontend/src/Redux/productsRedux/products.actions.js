import axios from "axios";
import { DELETE_ERROR, DELETE_LOADING, DELETE_SUCCESS, GET_ERROR, GET_LOADING, GET_SUCCESS, PATCH_ERROR, PATCH_LOADING, PATCH_SUCCESS, POST_ERROR, POST_LOADING, POST_SUCCESS } from "./products.types"


export const getProduct = ()=>async(dispatch)=>{
    dispatch({type:GET_LOADING})
    try {
        const res = await axios.get(`https://umang-first-products.onrender.com/products`);
        const data = res.data;
        return dispatch({type:GET_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:GET_ERROR})
    }

}


export const postProduct = (value)=>async(dispatch)=>{
    dispatch({type:POST_LOADING})
    try {
        const res = await axios.post(`https://umang-first-products.onrender.com/products`,value);
        const data = res.data;
        console.log(data);
        dispatch({type:POST_SUCCESS});
        return getProduct();
        
    } catch (error) {
        dispatch({type:POST_ERROR})
    }

}

export const patchProduct = (id,value)=>async(dispatch)=>{
    dispatch({type:PATCH_LOADING})
    try {
        const res = await axios.put(`https://umang-first-products.onrender.com/products/${id}`,value);
        const data = res.data;
        console.log(data);
        dispatch({type:PATCH_SUCCESS});
        return getProduct();

        
    } catch (error) {
        dispatch({type:PATCH_ERROR})
    }

}

export const deleteProduct = (id)=>async(dispatch)=>{
    dispatch({type:DELETE_LOADING})
    try {
        const res = await axios.delete(`https://umang-first-products.onrender.com/products/${id}`);
        const data = res.data;
        console.log(data);
        dispatch({type:DELETE_SUCCESS});
        return getProduct();
        
    } catch (error) {
        dispatch({type:DELETE_ERROR})
    }

}