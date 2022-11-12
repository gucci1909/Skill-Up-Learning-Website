import { Box, Container, Divider, HStack, Image, SimpleGrid, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Stack spacing={50}  padding={{base:5, md:10, lg:50}} bg="#202641" alignItems="center" >
        <SimpleGrid margin="auto"  w="80%" columns={[1,2,5]} fontSize="15px" spacing={5}  >
         
         <Stack alignItems="flex-start" spacing={5}> 
            <Text fontSize="18px" fontWeight="semibold" color="whiteAlpha.800" > popular Categories</Text>
            <SimpleGrid textAlign="left" direction={{base:"row" ,md:"column", }} columns={{base:"2", md:"1"}} spacing={{base:2, md:5}}   >
                 
                 <Text fontWeight="thin" color="whiteAlpha.800" > Artificial Intelligence</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Big Data</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Blockchain</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Business Applications</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Cloud Computing</Text>

                 <Text fontWeight="thin" color="whiteAlpha.800" >  Compliance-POSH</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Cybersecurity</Text>
  
              </SimpleGrid>
              
         </Stack>

  

         <Stack alignItems="flex-start" spacing={5}> 
            <Text fontSize="18px" fontWeight="semibold" color="whiteAlpha.800" > Top Courses</Text>
            <SimpleGrid textAlign="left" direction={{base:"row" ,md:"column", }} columns={{base:"2", md:"1"}} spacing={{base:2, md:5}}   >
                 
                 <Text fontWeight="thin" color="whiteAlpha.800" > Data Science</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Human of Things (IoT)</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Modern workplace</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Power Platform</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Productivity</Text>
        </SimpleGrid>
         </Stack>

         <Stack alignItems="flex-start" spacing={5}> 
            <Text fontSize="18px" fontWeight="semibold" color="whiteAlpha.800" > Popular Cources</Text>
            <SimpleGrid textAlign="left" direction={{base:"row" ,md:"column", }} columns={{base:"2", md:"1"}} spacing={{base:2, md:5}}   >
                 
                 <Text fontWeight="thin" color="whiteAlpha.800" > Artificial Intelligence Foundations</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Foundations of Cybersecurity Program</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > AI Chatbots Without Programming</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Blockchain Essentials</Text>
                            
        </SimpleGrid>
         </Stack>
         
         <Stack alignItems="flex-start" spacing={5}> 
            <Text fontSize="18px" fontWeight="semibold" color="whiteAlpha.800" > Company</Text>
            <SimpleGrid textAlign="left" direction={{base:"row" ,md:"column", }} columns={{base:"2", md:"1"}} spacing={{base:2, md:5}}   >
                 
                 <Text fontWeight="thin" color="whiteAlpha.800" > About Us</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Carers</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Privace</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Privacy Policy</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Acceptable Use Policy</Text>
               
        </SimpleGrid>
         </Stack>
           
        </SimpleGrid>


        <Divider />

     


        <Stack w="full" margin="auto" direction={{base:"column", md:"column", lg:"row"}} > 
           <HStack spacing={5}>
             <Image w="25px" src="https://www.hotjar.com/images/hotjar-logo-small.svg"/>
              <Text color="whiteAlpha.800" >Copyright © 2014 - 2022 Hotjar Ltd. All rights reserved.</Text>
           </HStack>

           <Spacer />

           <HStack spacing={5} >
            
              <Text color="whiteAlpha.800" >Cookie info</Text>
              <Text color="whiteAlpha.800" >Cookie settings</Text>
              <Text color="whiteAlpha.800" >Do not track</Text>
           </HStack>
         </Stack>

    </Stack>
  )
}

export default Footer
