import React, { useState } from "react";
import { useEffect } from "react";
import { Box, Button, Heading, Image, Input, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getProduct,
  patchProduct,
  postProduct
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
  const handleGet = ()=>{
    dispatch(getProduct());
  }
  const handleEdit = (id) => {
    const new_price = prompt("New Price");
    setTimeout(function () {
      handleEditPrice(new_price, id);
    }, 2000);
  };
  const handleEditPrice = (price, id) => {
    if (price.length === 0) {
      alert("Write Something in Edit");
    } else {
      const value = {
        price: Number(price),
      };
      setTimeout(function () {
        handleGet();
      }, 2000);
      dispatch(patchProduct(id, value));
    }
  }
  const handleDelete = (id) => {
    setTimeout(function () {
      handleGet();
    }, 2000);
    dispatch(deleteProduct(id));
  };
  const handlePost = (value) => {
    setTimeout(function () {
      handleGet();
    }, 2000);
    dispatch(postProduct(value));
  };
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  if(error){
    alert("Sorry your Request is giving error");
  }
  return (
    <Box>
      <Box>
        <Input
          placeholder="Course Name"
          value={products.course_name}
          type="text"
          onChange={(e) => handleChange(e)}
          name="course_name"
        />
        <Input
          placeholder="Description"
          value={products.description}
          type="text"
          onChange={(e) => handleChange(e)}
          name="description"
        />
        <Input
          placeholder="Image Url"
          value={products.image}
          type="text"
          onChange={(e) => handleChange(e)}
          name="image"
        />
        <Input
          placeholder="Price"
          value={products.price}
          type="number"
          onChange={(e) => handleChange(e)}
          name="price"
        />
        <Input
          placeholder="Discount"
          value={products.discount}
          type="text"
          onChange={(e) => handleChange(e)}
          name="discount"
        />
        <Button onClick={() => handlePost(products)}>Submit</Button>
      </Box>
      {loading? "" : data &&
        data.map((el) => (
          <Box>
            <Heading>Course Name : {el.course_name}</Heading>
            <Text>Description : {el.description}</Text>
            <Image src={el.image} />
            <Heading>Price : {el.price}</Heading>
            <Text>Discount : {el.discount}</Text>
            <Button onClick={() => handleEdit(el._id)}>Edit in price</Button>
            <Button onClick={() => handleDelete(el._id)}>
              Delete this product
            </Button>
          </Box>
        ))}
    </Box>
  );
}

export default ProductsCrud;
