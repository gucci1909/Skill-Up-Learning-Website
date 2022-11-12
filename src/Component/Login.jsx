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
                  src="data:image/jpeg;base64,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"
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
