import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductPage = () => {
  let data = useSelector((state) => state.product);

  const [productData, setProductData] = useState([]);

  console.log(data, "db");
  if (data.loading) {
    return (
      <img
        src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
        alt=""
        srcset=""
      />
    );
  }

  // console.log(productData);
  const handleChange = () => {
    const newdata = data.data.sort((a, b) => Number(a.price) - Number(b.price));
    setProductData(newdata);
  };

  return (
    <section>
      <div style={{ padding: "1px", backgroundColor: "grey" }}>
        <h1 style={{ color: "white", fontSize: "30px" }}>Courses we offer</h1>{" "}
      </div>

      <div className="product-page">
        <div
          className="product-sidebar"
          style={{
            padding: "1px",
            backgroundColor: "grey",
            borderRadius: "12px",
          }}
        >
          {/* <button onClick={()=>handleChange()}>Filter</button> */}
          <h3>Filter</h3>
          <button onClick={handleChange}>By Price</button>
        </div>
        <div className="product-container">
          {data.data?.map((item) => (
            <Link
              to={`/Products/${item._id}`}
              style={{ textDecoration: "none", color: "grey" }}
            >
              <div key={item._id} className="product-card">
                <div className="product-container-div1">
                  <img src={item.image} alt="" />
                  <div style={{ marginLeft: "15px" }}>
                    <h3 style={{ color: "black" }}>{item.course_name}</h3>
                    <span
                      style={{
                        fontWeight: "400",
                        fontSize: "20px",
                        color: "black",
                      }}
                    >
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
                  <button className="cart-btn">Add to cart</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProductPage;
