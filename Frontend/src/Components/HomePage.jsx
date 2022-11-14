import { Button,  Divider, Highlight, HStack, Image, SimpleGrid, Spacer, Stack, Text, VStack} from '@chakra-ui/react'
import React, { useState } from 'react'
import Naazslide from './slideShow'
import Loader from './SmallComponents/Loader'

const images = [
  "https://images.ctfassets.net/lh3zuq09vnm2/7EHGsWMc29UoHErPsvRAsi/0f8210b12ada1e9faa313b4d56274572/Panasonic.svg",
  "https://images.ctfassets.net/lh3zuq09vnm2/18dCY8kGkSbfdNB2Eod1Pp/4768154e8873caa4c1574499dc4e2aab/Microsoft_Logo.svg",
  "https://images.ctfassets.net/lh3zuq09vnm2/7siImqwRupwoBHyJCaO1zy/2d7ec1ccc7761f76c8fe18de52e889a4/T-Mobile.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/3A5yNJ7WfWikTXKsk7r4hh/4060c710bc560b59a0dd06b6521fbe94/Decathlon.svg",
   "https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg",
   "https://s.udemycdn.com/partner-logos/v4/tcs-dark.svg",
   "https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg",
  
    
]
const Naazlang = [
  {
    image:"https://in.skillup.online/_next/image/?url=https%3A%2F%2Fcourses-in.skillup.online%2Fasset-v1%3AIBM%2BDS0101EN-Skillup%2B2021%2Btype%40asset%2Bblock%40CO_Introduction-to-Data-Science.jpg&w=1920&q=75",
    name :"Learn Python: The Complete Python Programming Course",
     des:  "Self-Paced | Mentored | BEGINNER"  
  },
  {
    image:"https://in.skillup.online/_next/image/?url=https%3A%2F%2Fcourses-in.skillup.online%2Fasset-v1%3AIBM%2BDA0101EN%2Bv1%2Btype%40asset%2Bblock%40asset-v1_IBM_DA0101EN_v1_type_asset_block_CO_Data-Analysis-with-Python.jpg&w=1920&q=75",
    name :"Data Visualization with Python",
     des:  "Self-Paced | Mentored | BEGINNER" 
  },
  {
    image:"https://in.skillup.online/_next/image/?url=https%3A%2F%2Fcourses-in.skillup.online%2Fasset-v1%3AIBM%2BDS0103EN-Skillup%2B2021%2Btype%40asset%2Bblock%40CO_The-Data-Science-Method.jpg&w=1920&q=75",
    name :"The Data Science Method",
     des:  "Self-Paced | Mentored | BEGINNER" 
  },
  {
    image:"https://in.skillup.online/_next/image/?url=https%3A%2F%2Fcourses-in.skillup.online%2Fasset-v1%3AIBM%2BDS0301EN%2Bv1%2Btype%40asset%2Bblock%40Data_Privacy_Fundamentals.jpg&w=1920&q=75",
    name :"Data Privacy Fundamentals",
     des:  "Self-Paced | Mentored | BEGINNER"  
  }
]
const skillupt = [
  {
    image:"https://in.skillup.online/_next/image/?url=https%3A%2F%2Fcourses-in.skillup.online%2Fasset-v1%3AIBM%2BDS0101EN-Skillup%2B2021%2Btype%40asset%2Bblock%40CO_Introduction-to-Data-Science.jpg&w=1920&q=75",
    name :"The Complete 2022 Web Development Bootcamp",
     des:  "Beginner | Intermediate | Expert"  
  },
  {
    image:"https://in.skillup.online/_next/image/?url=https%3A%2F%2Fcourses-in.skillup.online%2Fasset-v1%3ASkillUp%2BHS-CSM-101%2B2021_Q1%2Btype%40asset%2Bblock%40asset-v1_SkillUp_HS-CSM-101_2021_Q1_type_asset_block_Coaching_Skills_for_Managers.png&w=1920&q=75",
    name :"Data Visualization with Python",
    des:  "Beginner | Intermediate | Expert" 
  },
  {
    image:"https://in.skillup.online/_next/image/?url=https%3A%2F%2Fcourses-in.skillup.online%2Fasset-v1%3ASkillUp%2BHS-PSBS-101%2B2021_Q2%2Btype%40asset%2Bblock%40Problem_Solving_for_Business_Success.jpg&w=1920&q=75",
    name :"The Data Science Method",
    des:  "Beginner | Intermediate | Expert" 
  },
  {
    image:"https://in.skillup.online/_next/image/?url=https%3A%2F%2Fcourses-in.skillup.online%2Fasset-v1%3ASkillUp%2BHS-EIPW-101%2B2022_Q1%2Btype%40asset%2Bblock%40asset-v1_SkillUp_HS-EIPW-101_2022_Q1_type_asset_block_asset-v1_SkillUp_HS-EIPW-101_2022_Q1_type_asset_block_EQ-and-IQ-in-the-Workplace.jpg&w=1920&q=75",
    name :"The Data Science Method",
    des:  "Beginner | Intermediate | Expert" 
  },
  {
    image:"https://in.skillup.online/_next/image/?url=https%3A%2F%2Fcourses-in.skillup.online%2Fasset-v1%3ASkillUp%2BHS-DISW-101%2B2021_Q2%2Btype%40asset%2Bblock%40asset-v1_SkillUp_HS-DISW-101_2021_Q2_type_asset_block_asset-v1_SkillUp_HS-DISW-101_2021_Q2_type_asset_block_asset-v1_SkillUp_HS-DISW-101_2021_Q2_type_asset_block_Diversity__1_.png&w=1920&q=75",
    name :"The Data Science Method",
    des:  "Beginner | Intermediate | Expert" 
  },
  {
    image:"https://in.skillup.online/_next/image/?url=https%3A%2F%2Fcourses-in.skillup.online%2Fasset-v1%3AIBM%2BDS0301EN%2Bv1%2Btype%40asset%2Bblock%40Data_Privacy_Fundamentals.jpg&w=1920&q=75",
    name :"Data Privacy Fundamentals",
    des:  "Beginner | Intermediate | Expert" 
  }
]



const HomePage = () => { 
const [isLoading, setIsLoading] = useState(true);

setTimeout(() => {
setIsLoading(false)
 
}, 1000);
 

// console.log(data)

if(isLoading){

 return (  
    <Loader />
   ) 

}




  return (
    <Stack border="orange" alignSelf="center" maxW="1400px" spacing={50} 
    padding={{base:"20px",md:"50px 100px"}} paddingTop="0px" >

       <Stack p={2}>
       <Text textAlign="left" maxWidth={{base:"100%",md:"100%",lg:"60%" }} fontSize={{base:"32px",lg:"42px" }} >
        <Highlight
        query='Learn without limits' 
        styles={{color:"red.500"}}>
        Tech skills that go beyond certifications, Learn without limits.
        </Highlight>
        </Text>

        <Stack  spacing={6} direction={{base:"column",md:"column", lg:"column",xl:"row"}} >
           <HStack spacing={5} >
             <Image src='https://in.skillup.online/_next/static/media/small_circle.cf81fa34.svg' w="25px" />
             <Text color="GrayText">
             Job-ready skills
             </Text>
           </HStack>
           <HStack spacing={5} >
             <Image src='https://in.skillup.online/_next/static/media/small_circle.cf81fa34.svg' w="25px" />
             <Text color="GrayText">
             Next-gen tech skills
             </Text>
           </HStack>
           <HStack spacing={5} >
             <Image src='https://in.skillup.online/_next/static/media/small_circle.cf81fa34.svg' w="25px" />
             <Text color="GrayText">
             Career-shaping skills
             </Text>
           </HStack>
        </Stack>

        <Stack padding={5}  w="full" spacing={50} direction={{base:"column",md:"column", lg:"row",xl:"row" }} >

        <Image maxH="800px" src="https://in.skillup.online/_next/image/?url=%2Fimages%2FbigDataBanner.png&w=750&q=75" />

        <Spacer />
         
         <Stack spacing={{base:5, lg:10}} margin="auto"  textAlign="left"  >

            <Text fontSize="xl" fontWeight="semibold" maxWidth={{base:"100%",md:"60%",lg:"60%" }}>
            Why Learn with SkillUp Online?
            </Text>
            <Text maxWidth={{base:"100%",md:"60%",lg:"60%" }} >
            We believe every learner is an individual and every course is an opportunity to build job-ready skills. Through our human-centered approach to learning, we will empower you to fulfil your professional and personal goals and enjoy career success.
            </Text>
          
            <Stack direction={{base:"column",md:"column", lg:"column",xl:"row" }}>
            <Button fontWeight="lighter" colorScheme="messenger" variant='outline'>
             Start With Free Trial
            </Button>
           
           <Button fontWeight="lighter" colorScheme="messenger" variant='solid'>
             Login With Google
           </Button>

            </Stack>

            <Text >
            Skill-up is free forever - upgrade anytime
            </Text>
        
         </Stack>

            

        </Stack>
       </Stack>

        

        <Stack margin="auto" align="center" spacing={5} >

          <Text fontWeight="semibold" fontSize="3xl">In-Demand Tech Courses</Text>
          <Text fontWeight="thin" fontSize="xl">Develop sought-after skills your industry needs.</Text>

         <SimpleGrid columns={{base:2,md:3,lg:4}} spacing={5} >
           
           {
             Naazlang.map((el)=>(
              <Stack spacing={10} textAlign="left"
               padding={2} borderWidth='1px' overflow='hidden' _hover={{  boxShadow:'2xl' }} >
                <Image src={el.image} />
                 <Stack textAlign="left">
                 <Text fontWeight="semibold" fontSize="xl">{el.name}</Text>
                <Text fontWeight="thin" color=" rgb(154, 107, 5)" fontSize="sm">{el.des}</Text>
                 </Stack>

                <Spacer />
                <Text color="blue.500" fontWeight="semibold" cursor="pointer" as="u" >Learn More</Text>
              </Stack>
             ))
           }


         </SimpleGrid>

          
        </Stack>

        <Stack margin="auto" align="center" spacing={15} >
            <Text fontWeight="semibold" fontSize="3xl">Transformative learning for every team</Text>
           
            <Text  fontSize="sm">We meet all your learning needs, so you don’t have to spend time managing multiple providers.</Text>
            
        </Stack>
        <SimpleGrid columns={{base:2, md:3}}  margin="auto" align="center" spacing={5} >
         
         <VStack  justifyContent="left"  p={5} >
           <Image src='https://business.udemy.com/wp-content/uploads/2022/07/academics-icon-expressive.svg' />
           <Text fontWeight="semibold">Learning & Development</Text>
           <Text>Deliver L&D programs that upskill your entire workforce with courses taught by instructors from across the globe in a variety of dynamic formats. </Text>
           <br/>
           <br/>
                <Text color="blue.500" fontWeight="semibold" cursor="pointer" as="u" >Learn More</Text>
         </VStack>

         <VStack  justifyContent="left" p={5} >
           <Image src='https://business.udemy.com/wp-content/uploads/2022/07/handshake-icon-expressive.svg' />
           <Text fontWeight="semibold">Human Resources</Text>
           <Text>Prepare your HR team to attract, grow, and retain talent by equipping them with the tools and skills they need to do their best work. </Text>
           <br/>
           <br/>
                <Text color="blue.500" fontWeight="semibold" cursor="pointer" as="u" >Learn More</Text>
         </VStack>

         <VStack justifyContent="left" textAlign="left"  p={5}>
           <Image src='https://business.udemy.com/wp-content/uploads/2022/07/dev-ops-icon.svg' />
           <Text fontWeight="semibold">Engineering</Text>
           <Text>Upgrade skills to stay ahead of the curve. Offer hands-on practice and training on cutting-edge technologies. </Text>
           <br/>
           <br/>
                <Text color="blue.500" fontWeight="semibold"  cursor="pointer" as="u" >Learn More</Text>
         </VStack>

   </SimpleGrid>
        
        <Stack  bg=" rgb(4,65,80) " direction={{base:"column", md:"row"}} margin="auto" align="center" spacing={5} padding={10} >

            <VStack color="white" alignItems="flex-start" textAlign="left" p={5} spacing={3} >
              <Text fontWeight="bold" fontSize="35px" >Get Started With Skillup</Text>
               <Text fontWeight="thin" fontSize="20px">Power the productivity of your teams with tailored skills training and competency-based industry certifications.</Text>
                   <Stack direction={{base:"column",md:"column", lg:"column",xl:"row" }}>
                      
                       
                       <Button fontWeight="lighter" colorScheme="messenger" variant='solid'>
                         Get Started Free
                       </Button>
      
                  </Stack>
                  <Text fontWeight="thin" fontSize="15px">No credit card required</Text>
            </VStack>

         <Divider display={{base:"block", md:"none"}} />

         <Stack  spacing={6} direction={{base:"column",md:"column", lg:"column",xl:"column" }} >
          <HStack>
             <Image src='https://in.skillup.online/_next/image/?url=%2Fimages%2Fskillupforbusiness-desktop-banner.jpg&w=1920&q=75' w="800px" />

          </HStack>
           
        </Stack>


        </Stack>



        <Stack margin="auto" align="center" spacing={5} >

            <Text fontWeight="semibold" fontSize="3xl">Language You Learn</Text>
            <Text fontWeight="thin" fontSize="xl">Save time and effort. Integrate SkillUP with dozens of Language and tools.</Text>

            <SimpleGrid columns={{base:3, md:6}}  margin="auto" align="center" spacing={5} >
           {/* //New Added */}
         <VStack  justifyContent="left" textAlign="left" p={5} >
           <Image w="80px" src='https://www.svgrepo.com/show/303157/react-logo.svg' />
           </VStack>

         <VStack  justifyContent="left" textAlign="left" p={5} >
           <Image w="80px" src='https://www.svgrepo.com/show/303206/javascript-logo.svg' />
              </VStack>

         <VStack justifyContent="left" textAlign="left"  p={5}>
           <Image w="80px" src='https://cdn-icons-png.flaticon.com/128/226/226777.png' />
          
         </VStack>
         <VStack justifyContent="left" textAlign="left"  p={5}>
           <Image w="80px" src="data:image/jpeg;base64,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" />
          
         </VStack>
         <VStack justifyContent="left" textAlign="left"  p={5}>
           <Image w="80px" src='data:image/jpeg;base64,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' />
          
         </VStack>
         <VStack justifyContent="left" textAlign="left"  p={5}>
           <Image w="80px" src='data:image/png;base64,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' />
          
         </VStack>

   </SimpleGrid>

           
            <Button  size="lg" fontWeight="lighter" colorScheme="messenger" variant='outline'>
             Explore Intergration
           </Button>
        </Stack>
        
          {/* //New added   */}
          <SimpleGrid columns={{base:2,md:3,lg:6}} spacing={3} >
           
           {
             skillupt.map((el)=>(
              <Stack spacing={10} textAlign="left"
               padding={1} borderWidth='1px' overflow='hidden' _hover={{  boxShadow:'2xl' }} >
                <Image src={el.image} />
                 <Stack textAlign="left">
                 <Text fontWeight="semibold" fontSize="15px">{el.name}</Text>
                <Text fontWeight="thin" color=" rgb(154, 107, 5)" fontSize="sm">{el.des}</Text>
                 </Stack>

                <Spacer />
                <Text color="blue.500" fontWeight="semibold" cursor="pointer" as="u" >Learn More</Text>
              </Stack>
             ))
           }


         </SimpleGrid>

       <Divider/>
         <Stack margin="auto" align="center" spacing={15} >
            <Text fontWeight="semibold" fontSize="3xl">Trusted by over 12,500 great teams</Text>
           
            <Text  fontSize="sm">Leading companies use the same courses to help employees keep their skills fresh.</Text>

            <Naazslide images={images} />
            
        </Stack>

           <Divider/>
    
        <Stack padding={2}  w="full" spacing={20} direction={{base:"column",md:"column", lg:"row",xl:"row" }} >

<Image maxH="800px" w="600px" src="https://corp.kaltura.com/wp-content/uploads/2021/03/What_is_blended_learning_header.jpg" />

<Spacer />
 
 <Stack spacing={{base:5, lg:10}} margin="auto"  textAlign="center"  >

    <Text fontSize="25px" fontWeight="semibold"  maxWidth={{base:"100%",md:"60%",lg:"60%" }}>
    Daily live Classes
    </Text>
    <Text maxWidth={{base:"100%",md:"60%",lg:"60%" }} >
    Chat with educators, ask questions, answer live polls, and get your doubts cleared - all while the class is going on.
    </Text>
  
    <Stack direction={{base:"column",md:"column", lg:"column",xl:"row" }}>
    <Button fontWeight="lighter" colorScheme="messenger" variant='outline'>
     Start With Free Trial
    </Button>
   
   <Button fontWeight="lighter" colorScheme="messenger" variant='solid'>
     Read More
   </Button>

    </Stack>
 </Stack>
 
    

</Stack>
         
        <Stack padding={2}  w="full" spacing={20} direction={{base:"column",md:"column", lg:"row",xl:"row" }} >



 
 <Stack spacing={{base:5, lg:10}} margin="auto"  textAlign="center"  >

    <Text fontSize="25px" fontWeight="semibold"  maxWidth={{base:"100%",md:"60%",lg:"60%" }}>
    Practice and revise
    </Text>
    <Text maxWidth={{base:"100%",md:"60%",lg:"60%" }} >
    Learning isn't just limited to classes with our practice section, mock tests and lecture notes shared as PDFs for your revision.
    </Text>
  
    <Stack direction={{base:"column",md:"column", lg:"column",xl:"row" }}>
    <Button fontWeight="lighter" colorScheme="messenger" variant='outline'>
     Start With Free Trial
    </Button>
   
   <Button fontWeight="lighter" colorScheme="messenger" variant='solid'>
     Read More
   </Button>

    </Stack>
 </Stack>
 
 <Spacer /> 
<Image maxH="800px" w="600px" src="https://media.istockphoto.com/id/1323851976/photo/classmates-are-learning-through-laptop.jpg?b=1&s=170667a&w=0&k=20&c=aVBndOkl3N8ehS6OvO3oQwfkFlNSmzmjJtMtlFLI_fA=" />

</Stack>
         

     

  

    </Stack>
  )
}

export default HomePage


//_hover={{  color: " red" }}