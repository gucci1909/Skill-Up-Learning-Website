import { Link } from "react-router-dom";

const ProductPage = ({ data, addToCart }) => {
  return (
    <section className="product-page" style={{marginBottom:"70px"}}>
      {/* <div className="product-sidebar">
          <button onClick={handlePrice}>Price</button>
        </div> */}
      <div
        className="product-container"
        style={{ width: "80%", margin: "auto" }}
      >
        {data ? (
          data.map((item, index) => (
            <div
              className="product-card"
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
              <div
                className="product-container-div1"
                style={{ textAlign: "start", display: "flex" }}
              >
                <img src={item.image} alt="" height="120px" />
                <div style={{ marginLeft: "15px" }}>
                  <Link to={`/Products/${item._id}`}>{item.course_name}</Link>
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
                  className="cart-btn"
                  style={{
                    height: "30px",
                    width: "180px",
                    color: "white",
                    backgroundColor: "green",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => addToCart(item)}
                >
                  AddToCart
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1>...loading</h1>
        )}
      </div>
    </section>
  );
};
export default ProductPage;
