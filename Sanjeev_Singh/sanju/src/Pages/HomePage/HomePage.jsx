import ContactIcon from "./components/contactIcon";
import "./HomePage.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductData } from "../../redux/product/prod.action";
import ProductPage from "./components/ProductPage";
import { useState } from "react";
import Slider from "./components/slider/Slider";
const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    dispatch(getProductData());
    setLoading(false);
  }, []);



  if (loading) {
    <h1>...loading</h1>;
  }

  return (
    <section>
      <div className="header-wallpaper">
        <Slider/>
      </div>
      <div>
        <div className="left-sidebar"></div>
        <div className="meddle-section">
          <ProductPage/>
        </div>
      </div>
      <ContactIcon />
    </section>
  );
};
export default HomePage;
