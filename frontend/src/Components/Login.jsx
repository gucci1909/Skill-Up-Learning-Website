import React, { useState } from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  Flex,
  Heading,
  Image,
  Input,
  Spinner,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { post_login } from "../Redux/loginRedux/login.actions";
import { ERROR_HANDLING } from "../Redux/loginRedux/login.types";

function Login() {
  const login = useSelector((store) => store.login);
  console.log(login.token);
  const dispatch = useDispatch();
  const [login_cred, setLogin_cred] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    let { name, value } = e.target;
    setLogin_cred({ ...login_cred, [name]: value });
  };
  const handleClick = (username, password) => {
    const login_credentials = {
      username: username,
      password: password,
    };
    setLogin_cred({
      ...login_cred,
      username: "",
      password: "",
    });
    return dispatch(post_login(login_credentials));
  };
  const handleError = () => {
    dispatch({ type: ERROR_HANDLING });
  };
  if (login.error) {
    return (
      <Alert status="error" h="100px" w="450px" ml="510px">
        <AlertIcon />
        <Box>
          <AlertTitle>ERROR HANDLING YOUR REQUEST!</AlertTitle>
          <AlertDescription>
            Please Write Right Credentials in your Login Details
          </AlertDescription>
        </Box>
        <CloseButton
          alignSelf="flex-start"
          position="relative"
          right={-1}
          top={-1}
          onClick={() => handleError()}
        />
      </Alert>
    );
  }
  if (login.isAuth) {
    return <Navigate to="/productsAdmin" />;
  }
  return (
    <Box
      display="flex"
      height="716px"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      bgImage="url('https://habitatbroward.org/wp-content/uploads/2020/01/10-Benefits-Showing-Why-Education-Is-Important-to-Our-Society.jpg')"
    >
      <Heading
        fontSize="55px"
        fontWeight="200"
        position="absolute"
        mt="140px"
        ml="585px"
        color="linear-gradient( #553c9a, #ee4b2b);"
        background-clip="text"
      >
        Admin Login
      </Heading>
      <Flex
        mt="250px"
        flexDirection={"column"}
        gap="30px"
        height="100px"
        w="500px"
        ml={"480px"}
        justify="center"
        alignItems={"center"}
      >
        <Input
          type="text"
          bgColor={"#EBF8FF"}
          placeholder="Admin Username"
          value={login_cred.username}
          name="username"
          onChange={(e) => handleChange(e)}
        />
        <Input
          bgColor={"#EBF8FF"}
          type="password"
          placeholder="Admin Password"
          value={login_cred.password}
          name="password"
          onChange={(e) => handleChange(e)}
        />
      </Flex>
      {login.loading ? (
        <Box display={"flex"} flexDirection="column" mt={"390px"} ml={"-280px"}>
          <Spinner
            hickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Box>
      ) : (
        <Box display={"flex"} flexDirection="column" mt={"365px"} ml={"-300px"}>
          <Button
            mt="30px"
            colorScheme={"red"}
            onClick={() =>
              handleClick(login_cred.username, login_cred.password)
            }
          >
            Login
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default Login;
