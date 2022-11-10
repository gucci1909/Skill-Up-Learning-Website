import axios from "axios";
import {
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
} from "./prod.actionType";

export const getProductData=()=>async(dispatch)=>{
    dispatch({
        type:GET_PRODUCTS_LOADING,
    });
    try{
        const res=await axios.get('https://umang-first-products.onrender.com/products');
        dispatch({
            type:GET_PRODUCTS_SUCCESS,
            payload:res.data,
        });
        localStorage.setItem("products",JSON.stringify(res.data.databases))
        return res.data;
    }catch(e){
        dispatch({
            type:GET_PRODUCTS_ERROR,
        })
    }
}