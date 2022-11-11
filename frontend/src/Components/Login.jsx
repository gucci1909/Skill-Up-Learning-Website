import React, { useState } from 'react'
import {Box,Heading} from "@chakra-ui/react"
import {useDispatch, useSelector} from "react-redux";
// import axios from 'axios';
import { post_login } from '../Redux/loginRedux/login.actions';

function Login() {
  const login = useSelector((store)=>store.login);
  console.log(login.token);
  const dispatch = useDispatch();
  const [login_cred,setLogin_cred] = useState({
    username : "",
    password : ""
  })
  const handleChange = (e)=>{
    let {name,value} = e.target;
    setLogin_cred({...login_cred,[name]:value});


  }
  const handleClick = (username,password)=>{
    const login_credentials = {
      username : username,
      password : password
    }
    return dispatch(post_login(login_credentials))

  }
  return (
    <Box>
      <Heading>Login</Heading>
      <input type="text" value={login_cred.username} name="username" onChange={(e)=>handleChange(e)}/>
      <input type="text" value={login_cred.password} name="password" onChange={(e)=>handleChange(e)}/>
      <button onClick={()=>handleClick(login_cred.username,login_cred.password)}>Login</button>
    </Box>
  )
}

export default Login
