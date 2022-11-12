import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleProductPage.css";
const SingleProductPage = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  // console.log(id,"id");
  useEffect(() => {
    fetch(`https://umang-first-products.onrender.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <img
        src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
        alt=""
        srcset=""
      />
    );
  }

  return (
    <section>
      <div className="single-product-container" style={{ textAlign: "justify" }} >
        <div>
          <div>
            <img src={data.image} alt="" />
          </div>
          <div style={{ textAlign: "justify" }} className="single-product-details">
            <h1>{data.course_name}</h1>
            <div>
            <span
              style={{ fontWeight: "400", fontSize: "30px", color: "black" }}
            >
              {" "}
              ₹
              {(
                Number(data.price) -
                (Number(data.price) * data.discount.split("%")[0]) / 100
              ).toFixed(0)}
            </span>
            <span style={{ color: "grey" }}>
              <del>₹{Number(data.price).toFixed(0)}</del>
            </span>
            <span> ({data.discount} off)</span>
            </div>
            <br />
            <button className="second-card-btn">Add to cart</button>
          </div>
        </div>
        <h3>Description</h3>
        <p>{data.description}</p>
      </div>
    </section>
  );
};
export default SingleProductPage;
