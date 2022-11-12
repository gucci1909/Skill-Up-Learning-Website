import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Image,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { LoginData, Sigup_google } from "../store/Auth/auth.action";
import skill from "../img/skill.jpeg"





const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [pass, setPass] = useState("");
  // const [pas, setPas] = useState("");

  const token = useSelector((store) => store.auth.user.token);
  console.log(token);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handlegoogle = () => {
    dispatch(Sigup_google());
  };

  const Submitdata = () => {
    // console.log(email, password);
    dispatch(LoginData(email, password));
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <>
      <Box display="flex"  w="100%">
        <Box
          w="65%"
          // border="1px solid red"
          margin="auto"
        >
          <Box m="22px">
            <Link to="/">
              <Image
                src={skill}
                style={{ height: "150px",width:"180px" }}
                alt="Clock logo"
              />
            </Link>
            <Text  fontSize="14px" color="grey">
              Don't have an account?{" "}
              <Link
                to="/signup"
                style={{
                  fontWeight: "600",
                  color: "#1b74e4",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                Singup
              </Link>
            </Text>
          </Box>
          <Link to="/login"></Link>

          <Box w="43%" ml="23%" boxShadow="dark-lg" p="8" mt="6%">
            <Heading as="h3" size="lg">
              Log in{" "}
            </Heading>
            <FormControl isRequired padding="5%">
              <Input
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputGroup size="md" mt="20px">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Box display="flex" justifyContent="space-between" mt="10px">
                <Box>
                  <Checkbox isInvalid>Stay Logged in</Checkbox>
                </Box>
                <Box color="blue" cursor="pointer">
                  Forgot password?
                </Box>
              </Box>
              <Button w="100%" mt="20px" onClick={Submitdata}>
                LOGIN
              </Button>

              <Box mt="20px">
                {" "}
                <b>OR</b>
                {/* <hr /> */}
              </Box>
              <div
                onClick={handlegoogle}
                style={{
                  opacity: "0.98",
                  fontSize: "14px",
                  color: "black",
                  borderRadius: "4px",
                  border: "1px solid #c6c6c6",
                  fontWeight: "700",
                  marginTop: "0px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                  width: "100%",
                  margin: "auto",
                  height: "40px",
                }}
              >
                <img
                  src=""
                  alt="skill-up"
                />
                <p>Continue with Google</p>
              </div>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
