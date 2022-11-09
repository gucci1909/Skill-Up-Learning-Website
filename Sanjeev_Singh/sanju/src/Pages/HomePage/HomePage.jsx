import ContactIcon from "./components/contactIcon";
import "./HomePage.css";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getProductData } from "../../redux/prod.action";
import ProductPage from "./components/ProductPage";
import { useState } from "react";
const HomePage=()=>{
    const [loading,setLoading]=useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        setLoading(true)
      dispatch(getProductData());
      setLoading(false)
    }, []);
    const { data } = useSelector((state) => state.product);
    console.log(data)

if (loading){
    <h1>...loading</h1>
}



    return (
        <section>
            <div className="header-wallpaper">
                <img src="./screen.jpg" alt="" />
            </div>
            <div>
                <div className="left-sidebar" >
                    
                </div>
                <div className="meddle-section">
            <ProductPage data={data.databases} />
                </div>
            </div>
            <ContactIcon/>
        </section>
    )
}
export default HomePage