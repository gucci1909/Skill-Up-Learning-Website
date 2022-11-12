import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
// import SubmitOrder from "./SubmitOrder";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function PaymentForm() {
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [user, setUsername] = useState();

  let userData={fname:firstName,lName:lastName,ph:phone,add:address,user:user}

  const lcFunction = () => {
    localStorage.setItem("userDetails",JSON.stringify(userData))
     console.log("done")
  };

  return (
    <div style={{ padding: "0.5rem" }}>
      <InputGroup className="mb-3">
        <InputGroup.Text style={{ backgroundColor: "#f0eceb" }}>
          First and last name
        </InputGroup.Text>
        <Form.Control
          aria-label="First name"
          id="user_input_first"
          onChange={(e) => setfirstName(e.target.value)}
        />
        <Form.Control
          aria-label="Last name"
          id="user_input_last"
          onChange={(e) => setlastName(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          id="user_input_username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputGroup.Text
          id="basic-addon2"
          style={{ backgroundColor: "#f0eceb" }}
        >
          @gmail.com
        </InputGroup.Text>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text
          id="inputGroup-sizing-default"
          style={{ backgroundColor: "#f0eceb" }}
          type="text"
        >
          Phone Number
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Phone Number"
          id="user_input_phone"
          onChange={(e) => setPhone(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text style={{ backgroundColor: "#f0eceb" }}>
          Mention Address
        </InputGroup.Text>
        <Form.Control
          as="textarea"
          aria-label="With textarea"
          placeholder="Address"
          id="user_input_address"
          onChange={(e) => setAddress(e.target.value)}
        />
      </InputGroup>
      <Button
        variant="dark"
        id="register"
        disabled={!firstName || !lastName || !phone || !address || !user}
        onClick={lcFunction}
      >
        <Link to="/finalPayment">Place Order</Link>
      </Button>
    </div>
  );
}
export default PaymentForm;
