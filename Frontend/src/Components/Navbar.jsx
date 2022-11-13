import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Stack,
  Text,
  useColorMode,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  MdDynamicFeed,
  MdEco,
  MdEditNotifications,
  MdFeed,
  MdOutlineDarkMode,
} from "react-icons/md";
import { BsLightbulb } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
//AiOutlineMenu

import { Link, NavLink } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { FaReact, FaNode } from "react-icons/fa";
import { SiJava } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const isAuth=true
  const auth = useSelector((store) => store.auth);
  const login = useSelector((store) => store.login);
  console.log(login.isAuth);

  return (
    <HStack
      zIndex="2"
      bg="white"
      style={{ position: "sticky", top: 0 }}
      p="0px 3%"
      justify="center"
      w="100%"
      h="72px"
      borderBottom="1px solid #eeee"
    >
      <HStack w="full" maxW="1400px" p="0.6rem" spacing={8}>
        <HStack>
          <Link to="/">
            <Image
              p="3px"
              w="80px"
              
              src="https://i.ibb.co/mXszdXf/skill-up-Logo.jpg"
            />
          </Link>
        </HStack>

        <Box display={{ base: "none", md: "none", lg: "block" }}>
          <HStack spacing={5}>
            <Text
              color="black"
              cursor="pointer"
              onClick={onOpen}
              fontSize={18}
              fontWeight="semibold"
            >
              {/* <Link to="/products"> */}
              Courses
              {/* </Link> */}
            </Text>
            <Link to="/">
              <Text color="black" fontSize={18} fontWeight="semibold">
                why to join?
              </Text>
            </Link>

            <HStack>
              <Stack>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<BiSearchAlt color="black.300" />}
                  />
                  <Input type="name" placeholder="Search" bg="gray.100" />
                </InputGroup>
              </Stack>
            </HStack>
          </HStack>
        </Box>

        <Spacer />
        <Link to="/products">
          <Image
            w="40px"
            src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
          ></Image>
        </Link>

        <Box display={{ base: "none", md: "none", lg: "block" }}>
          <HStack>
            {!auth.user.token ? (
              <>
                <NavLink to="/login">
                  <Button
                    fontWeight="lighter"
                    colorScheme="messenger"
                    variant="outline"
                  >
                    Sign in
                  </Button>
                </NavLink>
                <NavLink to="/signup">
                  <Button
                    fontWeight="lighter"
                    colorScheme="messenger"
                    variant="solid"
                  >
                    Signup for Free
                  </Button>
                </NavLink>{" "}
              </>
            ) : (
              <>
                <Text fontSize={"24px"} ml="-20px" color="#3182CE">
                  Hii , Learner
                </Text>
              </>
            )}

            <NavLink to="/loginAdmin">
              <Button
                fontWeight="lighter"
                colorScheme="messenger"
                variant="solid"
                disabled={login.isAuth}
              
              >
                Admin Signin
              </Button>
            </NavLink>

            <IconButton
              fontSize="25px"
              borderRadius={50}
              onClick={toggleColorMode}
              icon={
                colorMode === "light" ? <MdOutlineDarkMode /> : <BsLightbulb />
              }
            />
          </HStack>
        </Box>
        <Box display={{ base: "none", md: "none", lg: "block" }}></Box>

        <HStack display={{ base: "block", md: "block", lg: "none" }}>
          <IconButton
            onClick={() => onOpen()}
            icon={<AiOutlineMenu />}
          ></IconButton>
        </HStack>
      </HStack>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <HStack alignItems="center">
              <Image
                w="80px"
                src="https://i.ibb.co/mXszdXf/skill-up-Logo.jpg"
              />

              <IconButton
                fontSize="25px"
                position="absolute"
                right="12"
                borderRadius={50}
                onClick={toggleColorMode}
                icon={
                  colorMode === "light" ? (
                    <MdOutlineDarkMode />
                  ) : (
                    <BsLightbulb />
                  )
                }
              />
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <Accordion>
              <AccordionItem>

                <AccordionButton>
              <Box flex='1' textAlign='left'>
                     <Link to="/products" onClick={()=>onClose()} >
                     <Text fontWeight="semibold" fontSize="md" >
                       Buy Courses 
                        </Text></Link>
                     </Box>
                
                   </AccordionButton>

                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontWeight="semibold" fontSize="md">
                      Web Developement
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4}>
                  <VStack alignItems="left">
                    <Link to="/" onClick={() => onClose()}>
                      <Flex alignItems="center">
                        <IconButton
                          color="blue.500"
                          icon={<FaReact />}
                          bg="none"
                        />
                        <Text>React</Text>
                      </Flex>
                    </Link>
                    <Divider />

                    <Link to="/WhyHotjar" onClick={() => onClose()}>
                      <Flex alignItems="center">
                        <IconButton
                          color="blue.500"
                          icon={<SiJava />}
                          bg="none"
                        />
                        <Text>Java</Text>
                      </Flex>
                    </Link>
                    <Divider />
                    <Link to="/pricing" onClick={() => onClose()}>
                      <Flex alignItems="center">
                        <IconButton
                          color="blue.500"
                          icon={<IoLogoJavascript />}
                          bg="none"
                        />
                        <Text>JavaScript</Text>
                      </Flex>
                    </Link>
                    <Divider />
                    <Link to="/about" onClick={() => onClose()}>
                      <Flex alignItems="center">
                        <IconButton
                          color="blue.500"
                          icon={<FaNode />}
                          bg="none"
                        />
                        <Text>Nodejs</Text>
                      </Flex>
                    </Link>
                    <Divider />
                  </VStack>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontWeight="semibold" fontSize="md">
                      Business
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4}>
                  <VStack alignItems="left">
                    <Link to="/" onClick={() => onClose()}>
                      <Flex alignItems="center">
                        <IconButton
                          color="red.500"
                          icon={<MdEditNotifications />}
                          bg="none"
                        />
                        <Text>Leadership</Text>
                      </Flex>
                    </Link>
                    <Divider />

                    <Link to="/WhyHotjar" onClick={() => onClose()}>
                      <Flex alignItems="center">
                        <IconButton
                          color="red.500"
                          icon={<MdFeed />}
                          bg="none"
                        />
                        <Text>Product Management</Text>
                      </Flex>
                    </Link>
                    <Divider />
                    <Link to="/pricing" onClick={() => onClose()}>
                      <Flex alignItems="center">
                        <IconButton
                          color="red.500"
                          icon={<MdDynamicFeed />}
                          bg="none"
                        />
                        <Text>Communication Skill</Text>
                      </Flex>
                    </Link>
                    <Divider />
                    <Link to="/about" onClick={() => onClose()}>
                      <Flex alignItems="center">
                        <IconButton
                          color="red.500"
                          icon={<MdEco />}
                          bg="none"
                        />
                        <Text>Fiction Writing</Text>
                      </Flex>
                    </Link>
                    <Divider />
                  </VStack>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontWeight="semibold" fontSize="md">
                      IT & Software
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4}>
                  <VStack alignItems="left">
                    <Link to="/" onClick={() => onClose()}>
                      <Flex alignItems="center">
                        <IconButton
                          color="red.500"
                          icon={<MdEditNotifications />}
                          bg="none"
                        />
                        <Text>Electronics</Text>
                      </Flex>
                    </Link>
                    <Divider />

                    <Link to="/WhyHotjar" onClick={() => onClose()}>
                      <Flex alignItems="center">
                        <IconButton
                          color="red.500"
                          icon={<MdFeed />}
                          bg="none"
                        />
                        <Text>Embedded System</Text>
                      </Flex>
                    </Link>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontWeight="semibold" fontSize="md">
                      Learn
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4}>
                  <VStack alignItems="left">
                    <Link to="/" onClick={() => onClose()}>
                      <Flex alignItems="center">
                        <IconButton
                          color="red.500"
                          icon={<MdEditNotifications />}
                          bg="none"
                        />
                        <Text>
                          <Link to="/products"> 
                          Products
                          
                          </Link>
                          
                          </Text>
                      </Flex>
                    </Link>
                    <Divider />

                    <Link to="/WhyHotjar" onClick={() => onClose()}>
                      <Flex alignItems="center">
                        <IconButton
                          color="red.500"
                          icon={<MdFeed />}
                          bg="none"
                        />
                        <Text>WhyHotJar</Text>
                      </Flex>
                    </Link>
                    <Divider />
                    <Link to="/pricing" onClick={() => onClose()}>
                      <Flex alignItems="center">
                        <IconButton
                          color="red.500"
                          icon={<MdDynamicFeed />}
                          bg="none"
                        />
                        <Text>Pricing</Text>
                      </Flex>
                    </Link>
                    <Divider />
                    <Link to="/about" onClick={() => onClose()}>
                      <Flex alignItems="center">
                        <IconButton
                          color="red.500"
                          icon={<MdEco />}
                          bg="none"
                        />
                        <Text>About</Text>
                      </Flex>
                    </Link>
                    <Divider />
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Divider />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};

export default Navbar;
