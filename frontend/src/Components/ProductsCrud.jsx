import React, { useState } from "react";
import { useEffect } from "react";
import { Box, Button, Flex, Grid, GridItem, Heading, Image, Input, Skeleton, Text, Textarea, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getProduct,
  patchProduct,
  postProduct,
} from "../Redux/productsRedux/products.actions";

function ProductsCrud() {
  const { loading, error, data } = useSelector((store) => store.product);
  const [products, setProducts] = useState({
    course_name: "",
    description: "",
    image: "",
    price: 0,
    discount: "",
  });
  console.log(data);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    let { name, value } = e.target;
    setProducts({
      ...products,
      [name]: value,
    });

  };
  const handleGet = () => {
    dispatch(getProduct());
  };
  const handleEdit = (id,price) => {
    const new_price = prompt("New Price");
    setTimeout(function () {
      handleEditPrice(new_price, id,price);
    }, 2000);
  };
  const handleEditPrice = (price, id,price1) => {
    if (price.length === 0) {
      alert("Write Something in Edit");
    } else {
      const value = {
        price: Number(price),
      };
      setTimeout(function () {
        handleGet();
        alert(`Price has been changed from ${price1} to ${price}`);
      }, 2000);
      dispatch(patchProduct(id, value));
    }
  };
  const handleDelete = (id) => {
    setTimeout(function () {
      handleGet();
      alert("Deleted Successfully");
    }, 2000);
    dispatch(deleteProduct(id));
  };
  const handlePost = (value) => {
    setTimeout(function () {
      handleGet();
      alert("Posted Successfully");
    }, 2000);
    dispatch(postProduct(value));
    setProducts({
      ...products,
      course_name:"",
      description:"",
      image:"",
      price:0,
      discount:""
    })
  };
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  if (error) {
    alert("Sorry your Request is giving error");
  }
  return (
    <Box>
      <Box display={"flex"} justifyContent="center" alignItems={"center"}>
      <Heading  h="80px" color={"tomato"} fontSize={"24px"} w="300px">Admin Product Page</Heading>

      </Box>
      <Box>
        <Flex justifyContent={"center"} alignContent="center" display={"flex"}>

      <Heading h="40px"  color={"gray"} fontSize={"24px"} w="300px">ADD NEW PRODUCT</Heading>
        </Flex>
      <Flex flexDirection={"column"} gap="20px" justify={'center'} alignItems="center" >

        <Input
        h="35px"
        w="500px"
          placeholder="Course Name"
          value={products.course_name}
          type="text"
          bgColor="lightcyan"
          onChange={(e) => handleChange(e)}
          name="course_name"
        />
        <Textarea
          h="35px"
          w="500px"
          placeholder="Description"
          bgColor={"lightblue"}
          value={products.description}
          type="text"
          onChange={(e) => handleChange(e)}
          name="description"
        />
        <Input
          h="35px"
          w="500px"
          placeholder="Image Url"
          value={products.image}
          bgColor="lightcyan"
          type="text"
          onChange={(e) => handleChange(e)}
          name="image"
        />
        <Input
          h="35px"
          w="500px"
          placeholder="Price"
          value={products.price}
          bgColor={"lightblue"}
          type="number"
          onChange={(e) => handleChange(e)}
          name="price"
        />
        <Input
          h="35px"
          w="500px"
          placeholder="Discount"
          bgColor="lightcyan"
          value={products.discount}
          type="text"
          onChange={(e) => handleChange(e)}
          name="discount"
        />
        <Button colorScheme={"teal"} onClick={() => handlePost(products)}>Submit</Button>
      </Flex>
      </Box>

      {loading
        ? <>
        <Skeleton height='40px' mt="20px" >
        <Box>Hello World!</Box>
      </Skeleton>
      <Skeleton
        height='40px'
        // isLoaded={isLoaded}
        bg='green.500'
        mt="20px"
        color='white'
        gap={"20px"}
        fadeDuration={1}
      >
      
      </Skeleton>
      <Skeleton
        height='40px'
        mt="20px"
        // isLoaded={isLoaded}
        fadeDuration={4}
        gap="20px"
        bg='blue.500'
        color='white'
      >
       
      </Skeleton>
      <Skeleton height='40px' mt="20px">
  
      </Skeleton>
      <Skeleton
        height='40px'
        // isLoaded={isLoaded}
        bg='green.500'
        color='white'
        mt="20px"
        gap={"20px"}
        fadeDuration={1}
      >
      
      </Skeleton>
      <Skeleton
        height='40px'
        // isLoaded={isLoaded}
        fadeDuration={4}
        gap="20px"
        mt="20px"
        bg='blue.500'
        color='white'
      >
       
      </Skeleton>
      <Skeleton height='40px' mt="20px" >
        <Box>Hello World!</Box>
      </Skeleton>
      <Skeleton
        height='40px'
        // isLoaded={isLoaded}
        bg='green.500'
        color='white'
        mt="20px"
        gap={"20px"}
        fadeDuration={1}
      >
      
      </Skeleton>
      <Skeleton
        height='40px'
        // isLoaded={isLoaded}
        fadeDuration={4}
        gap="20px"
        mt="20px"
        bg='blue.500'
        color='white'
      >
       
      </Skeleton>
      <Skeleton height='40px'mt="20px" >
        <Box>Hello World!</Box>
      </Skeleton>
      <Skeleton
        height='40px'
        // isLoaded={isLoaded}
        bg='green.500'
        color='white'
        mt="20px"
        gap={"20px"}
        fadeDuration={1}
      >
      
      </Skeleton>
      <Skeleton
        height='40px'
        // isLoaded={isLoaded}
        fadeDuration={4}
        gap="20px"
        mt="20px"
        bg='blue.500'
        color='white'
      >
       
      </Skeleton>
      </>
        
        : <Grid w="full" 
        templateColumns={{
          base : "repeat(1,1fr)"
  ,        md:"repeat(2,1fr)",
          lg:"repeat(3,1fr)"
        }}
        gap="20px"
        >
        
        {data &&
          data.map((el) => (
            <GridItem key={el._id} mt="30px">
              <VStack>
              <Image borderRadius={"20px"} h="170px" w="300px" src={el.image} />
              <Heading h="80px" color={"tomato"} fontSize={"24px"} w="300px">{el.course_name}</Heading>
              <Text fontSize={"16px"} color="darkgray" h="450px" w="400px">{el.description}</Text>
              <Text fontSize={"24px"} >Price : {el.price}</Text>
              <Text >Discount : {el.discount}</Text>
              <Box display={"flex"} gap="20px">
              <Button colorScheme={"blue"} onClick={() => handleEdit(el._id,el.price)}>Edit Price</Button>
              <Button colorScheme={"red"} onClick={() => handleDelete(el._id)}>
                Delete Product
              </Button>

              </Box>

              </VStack>
            </GridItem>
          ))}
          </Grid>
          }


     
    </Box>
  );
}

export default ProductsCrud;
