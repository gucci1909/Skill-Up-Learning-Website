import React from "react";
import { Link } from "react-router-dom";
import "./FinalPaymentPage.css";
import { Button } from "react-bootstrap";
import { MdEmail, MdPerson, MdLocationOn, MdPhone } from "react-icons/md";
function FinalPaymentPage() {
  let data = JSON.parse(localStorage.getItem("userDetails"));
  console.log(data, "finalp Page");
  return (
    <div>
      <div className="final-print">
        <div>
          <img
            className="img"
            src="https://www.code-brew.com/wp-content/uploads/2019/09/image-6@2x.png"
            alt=""
            srcset=""
          />
        </div>
        <div className="user-receipt">
          <div>
            <label className="iconDiv1">
              <span>
                <MdPerson className="icon" />
              </span>{" "}
              Person Name :{" "}
            </label>
            <span>
              {data.fname} {data.lName}
            </span>
          </div>
          <div>
            <label className="iconDiv">
              {" "}
              <span>
                <MdEmail className="icon" />
              </span>{" "}
              Email :{" "}
            </label>
            <span>{`${data.user}gmail.com`}</span>
          </div>
          <div>
            <label className="iconDiv">
              {" "}
              <span>
                <MdPhone className="icon" />
              </span>{" "}
              Phone :{" "}
            </label>
            <span>{data.ph}</span>
          </div>
          <div>
            <label className="iconDiv">
              {" "}
              <span>
                <MdLocationOn className="icon" />
              </span>{" "}
              Address :{" "}
            </label>
            <span>{data.add}</span>
          </div>
        </div>
      </div>
      <Button variant="dark">
        <Link to="/">Go to Home Page</Link>
      </Button>
    </div>
  );
}
export default FinalPaymentPage;
