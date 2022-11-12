import React, { useState } from 'react'
import {Box,Button,Heading,Input} from "@chakra-ui/react"
import {useDispatch, useSelector} from "react-redux";
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
      <Input type="text" placeholder="Admin Username" value={login_cred.username} name="username" onChange={(e)=>handleChange(e)}/>
      <Input type="password" placeholder="Admin Password" value={login_cred.password} name="password" onChange={(e)=>handleChange(e)}/>
      <Button onClick={()=>handleClick(login_cred.username,login_cred.password)}>Login</Button>
    </Box>
  )
}

export default Login
