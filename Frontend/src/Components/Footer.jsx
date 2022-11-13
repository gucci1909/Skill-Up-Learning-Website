import { Divider, HStack, Image, SimpleGrid, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Stack spacing={50}  _hover={{ color: " pink" }}  padding={{base:5, md:10, lg:50}} bg="#202641" alignItems="center" >
        <SimpleGrid margin="auto"  w="80%" columns={[1,2,5]} fontSize="15px" spacing={5}  >
         
         <Stack alignItems="flex-start" spacing={5}> 
            <SimpleGrid textAlign="left" direction={{base:"row" ,md:"column", }} columns={{base:"2", md:"1"}} spacing={{base:2, md:5}}   >
               <Image w="100px" h="100px" src="https://i.ibb.co/rGQZrFr/Skillogo.jpg"/>
              </SimpleGrid>
              
         </Stack>
         <Stack alignItems="flex-start" spacing={5}> 
            <Text fontSize="18px" fontWeight="semibold" color="whiteAlpha.800" > popular Categories</Text>
            <SimpleGrid   textAlign="left" direction={{base:"row" ,md:"column", }} columns={{base:"2", md:"1"}} spacing={{base:2, md:5}}   >
                 
                 <Text _hover={{color: " rgb(249,198,84)" }} fontWeight="thin" color="whiteAlpha.800" > Artificial Intelligence</Text>
                 <Text  _hover={{color: " rgb(249,198,84)" }} fontWeight="thin" color="whiteAlpha.800" > Big Data</Text>
                 <Text  _hover={{color: " rgb(249,198,84)" }} fontWeight="thin" color="whiteAlpha.800" > Blockchain</Text>
                 <Text  _hover={{color: " rgb(249,198,84)" }} fontWeight="thin" color="whiteAlpha.800" > Business Applications</Text>
                 <Text  _hover={{color: " rgb(249,198,84)" }} fontWeight="thin" color="whiteAlpha.800" > Cloud Computing</Text>

                 <Text  _hover={{color: " rgb(249,198,84)" }} fontWeight="thin" color="whiteAlpha.800" >  Compliance-POSH</Text>
                 <Text  _hover={{color: " rgb(249,198,84)" }} fontWeight="thin" color="whiteAlpha.800" > Cybersecurity</Text>
  
              </SimpleGrid>
              
         </Stack>

  

         <Stack alignItems="flex-start" spacing={5}> 
            <Text fontSize="18px" fontWeight="semibold" color="whiteAlpha.800" > Top Courses</Text>
            <SimpleGrid textAlign="left" direction={{base:"row" ,md:"column", }} columns={{base:"2", md:"1"}} spacing={{base:2, md:5}}   >
                 
                 <Text  _hover={{color: " rgb(249,198,84)" }} fontWeight="thin" color="whiteAlpha.800" > Data Science</Text>
                 <Text  _hover={{color: " rgb(249,198,84)" }} fontWeight="thin" color="whiteAlpha.800" > Human of Things (IoT)</Text>
                 <Text  _hover={{color: " rgb(249,198,84)" }} fontWeight="thin" color="whiteAlpha.800" > Modern workplace</Text>
                 <Text  _hover={{color: " rgb(249,198,84)" }} fontWeight="thin" color="whiteAlpha.800" > Power Platform</Text>
                 <Text  _hover={{color: " rgb(249,198,84)" }} fontWeight="thin" color="whiteAlpha.800" > Productivity</Text>
        </SimpleGrid>
         </Stack>

         <Stack alignItems="flex-start" spacing={5}> 
            <Text fontSize="18px" fontWeight="semibold" color="whiteAlpha.800" > Popular Cources</Text>
            <SimpleGrid textAlign="left" direction={{base:"row" ,md:"column", }} columns={{base:"2", md:"1"}} spacing={{base:2, md:5}}   >
                 
                 <Text  _hover={{color: " rgb(249,198,84)" }} fontWeight="thin" color="whiteAlpha.800" > Artificial Intelligence Foundations</Text>
                 <Text  _hover={{color: " rgb(249,198,84)" }} fontWeight="thin" color="whiteAlpha.800" > Foundations of Cybersecurity Program</Text>
                 <Text  _hover={{color: " rgb(249,198,84)" }} fontWeight="thin" color="whiteAlpha.800" > AI Chatbots Without Programming</Text>
                 <Text  _hover={{color: " rgb(249,198,84)" }} fontWeight="thin" color="whiteAlpha.800" > Blockchain Essentials</Text>
                            
        </SimpleGrid>
         </Stack>
         
         <Stack alignItems="flex-start" spacing={5}> 
            <Text fontSize="18px" fontWeight="semibold" color="whiteAlpha.800" > Company</Text>
            <SimpleGrid textAlign="left" direction={{base:"row" ,md:"column", }} columns={{base:"2", md:"1"}} spacing={{base:2, md:5}}   >
                 
                 <Text  _hover={{color: " rgb(249,198,84)" }} fontWeight="thin" color="whiteAlpha.800" > About Us</Text>
                 <Text  _hover={{color: " rgb(249,198,84)" }} fontWeight="thin" color="whiteAlpha.800" > Carers</Text>
                 <Text  _hover={{color: " rgb(249,198,84)" }} fontWeight="thin" color="whiteAlpha.800" > Privace</Text>
                 <Text  _hover={{color: " rgb(249,198,84)" }} fontWeight="thin" color="whiteAlpha.800" > Privacy Policy</Text>
                 <Text  _hover={{color: " rgb(249,198,84)" }} fontWeight="thin" color="whiteAlpha.800" > Acceptable Use Policy</Text>
               
        </SimpleGrid>
         </Stack>
           
        </SimpleGrid>


        <Divider />

     


        <Stack w="full" margin="auto" direction={{base:"column", md:"column", lg:"row"}} > 
           <HStack spacing={5}>
             <Image w="35px" src="https://i.ibb.co/rGQZrFr/Skillogo.jpg"/>
              <Text color="whiteAlpha.800" >Copyright © 2014 - 2022 Skill-Up Ltd. All rights reserved.</Text>
           </HStack>

           <Spacer />

           <HStack spacing={5} >
            
              <Text  _hover={{color: " rgb(238, 168, 17)" }} color="whiteAlpha.800" >Cookie info</Text>
              <Text  _hover={{color: " rgb(238, 168, 17)" }} color="whiteAlpha.800" >Cookie settings</Text>
              <Text  _hover={{color: " rgb(238, 168, 17)" }} color="whiteAlpha.800" >Do not track</Text>
           </HStack>
         </Stack>

    </Stack>
  )
}

export default Footer
