import { useEffect, useState } from "react";
// import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import PaymentForm from "./PaymentForm";
// import SubmitOrder from "./SubmitOrder";
// import { Link } from "react-router-dom";
function CartList({ cart }) {
  const [CART, setCART] = useState([]);
  useEffect(() => {
    setCART(cart);
  }, [cart]);
  return (
    <div
      className="container"
      style={{
        width: "95%",
        "box-shadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        display: "flex",
        margin: "auto",
        marginBottom: "50px",
        padding: "0.5rem",
        justifyContent: "space-around",
        borderRadius: "10px",
        gap: "1rem",
      }}
    >
      <div
        className="cart-total-items"
        style={{ width: "55%", border: "1px solid black", borderRadius: "5px" }}
      >
        {" "}
        {CART?.map((cartItem, cartindex) => {
          return (
            <div
              style={{
                width: "90%",
                margin: "auto",
                marginTop: "10px",
                borderRadius: "5px",
                "box-shadow":
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                marginBottom: "10px",
              }}
            >
              <div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    justifyContent: "space-around",
                    textAlign: "center",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <h2>{cartItem.course_name}</h2>
                  </div>
                  <div style={{ margin: "auto" }}>
                    <img
                      src={cartItem.image}
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div style={{ margin: "auto" }}>
                    <Button
                      variant="dark"
                      onClick={() => {
                        const _CART = CART.map((item, index) => {
                          return cartindex === index
                            ? {
                                ...item,
                                quantity:
                                  item.quantity > 0 ? item.quantity - 1 : 0,
                              }
                            : item;
                        });
                        setCART(_CART);
                      }}
                    >
                      -
                    </Button>
                    <span> {cartItem.quantity} </span>
                    <Button
                      variant="dark"
                      onClick={() => {
                        const _CART = CART.map((item, index) => {
                          return cartindex === index
                            ? { ...item, quantity: item.quantity + 1 }
                            : item;
                        });
                        setCART(_CART);
                      }}
                    >
                      +
                    </Button>
                    <span> Rs. {cartItem.price * cartItem.quantity} </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="total-bill"
        style={{ width: "45%", border: "1px solid black", borderRadius: "5px" }}
      >
        <div>
          <p>
            <strong>Net Amount :</strong>
            <strong>
              {CART.map((item) => item.price * item.quantity).reduce(
                (total, value) => total + value,
                0
              )}
            </strong>{" "}
            <strong>$</strong>
          </p>
        </div>
        <PaymentForm />
      </div>
    </div>
  );
}

export default CartList;
