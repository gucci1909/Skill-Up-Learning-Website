import { Image, Stack } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";


const Naazslide = ({images}) => {

  
    // const Naazsettings = {
    //     dots: false,
    //     infinite: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     Naazslide: true,
    //     speed: 1050,
    //     NaazslideSpeed: 0,
    //     cssEase: "linear"
    //   };

      return (
        // <Stack  maxW={{base:"300px" , md:"800px" , xl:"full"}} >
         
        //   <Slider style={{gap:"20px"}} {...Naazsettings}>
        //    {
        //     Naazim.map((el)=>(
        //         <Stack>
        //             <Image width={{base:"50px", md:"150px"}} src={el} />
        //         </Stack>
        //     ))
        //    }
        //   </Slider>
        // </Stack>
        <div style={{ width: "800px" }}>
      <div style={{gap:"20px", display: "flex"}}>
      {images.map((el) => (
        <img src={el} width="150px" alt="" />
      ))}
    </div>
    </div>
      );
}

export default Naazslide

