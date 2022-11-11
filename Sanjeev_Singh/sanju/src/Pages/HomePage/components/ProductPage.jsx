
import { useState } from "react";
import { useSelector } from "react-redux";

const ProductPage = () => {
  let  data  = useSelector((state) => state.product);

  const [productData, setProductData] = useState([]);

  console.log(data, "db");
  if(data.loading){
    return <h1>...loading</h1>
  }

  
  // console.log(productData);
  const handleChange = () => {
    const newdata = data.data.sort((a, b) => Number(a.price) - Number(b.price));
  setProductData(newdata)
  };

  return (
    <section className="product-page">
      <div className="product-sidebar">
        {/* <button onClick={()=>handleChange()}>Filter</button> */}
        <h3>Filter</h3>
        <button  onClick={handleChange} >By Price</button>
      </div>
      <div style={{ width: "80%", margin: "auto" }}>
        {data.data?.map((item) => (
          <div
            key={item._id}
            style={{
              display: "flex",
              marginTop: "10px",
              marginBottom: "10px",
              border: "1px solid grey",
              borderRadius: "4px",
              justifyContent: "space-between",
            }}
          >
            <div style={{ textAlign: "start", display: "flex" }}>
              <img src={item.image} alt="" height="120px" />
              <div style={{ marginLeft: "15px" }}>
                <h3>{item.course_name}</h3>
                <span style={{ fontWeight: "400", fontSize: "20px" }}>
                  {" "}
                  ₹
                  {(
                    Number(item.price) -
                    (Number(item.price) * item.discount.split("%")[0]) / 100
                  ).toFixed(0)}
                </span>
                <span style={{ color: "grey" }}>
                  <del>₹{Number(item.price).toFixed(0)}</del>
                </span>
                <span> ({item.discount} off)</span>
              </div>
            </div>
            <div
              style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "40px",
                marginRight: "30px",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  height: "30px",
                  width: "180px",
                  color: "white",
                  backgroundColor: "green",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                AddToCart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ProductPage;
