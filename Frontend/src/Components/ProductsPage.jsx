import axios from "axios";
import { useEffect, useState } from "react";
import CartList from "./CartList";
import Header from "./Header";
import "./ProductsPage.css";
import ProductPage from "./ProductPage.jsx";
import Slider from "./Slider/Slider.js";
import ContactIcon from "./contactIcon";

const ProductsPage = () => {
  const [data, setData] = useState([]);
  const url = "https://umang-first-products.onrender.com/products";
  const getProducts = () => {
    axios
      .get(url)
      .then(function (response) {
        // handle success
        // console.log(response.data.databases);
        setData(response.data.databases);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const handleShow = (value) => {
    setShowCart(value);
  };
  const addToCart = (elem) => {
    setCart([...cart, { ...elem, quantity: 1 }]);
  };
  // console.log("data-homepage", data);
  console.log("cart", cart);
  return (
    <>
      <Slider />
      <div>
        <Header count={cart.length} handleShow={handleShow} />
      </div>
      {showCart ? (
        <CartList cart={cart} />
      ) : (
        <ProductPage data={data} addToCart={addToCart} />
      )}
      <ContactIcon />
    </>
  );
};
export default ProductsPage;
