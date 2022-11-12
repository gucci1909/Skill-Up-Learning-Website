import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";

function SubmitOrder() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
    return alert("hii");
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick}>Place Order</Button>
      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">Lyst Says...</Popover.Header>
          <Popover.Body>
            <strong>This will Place Order</strong>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}
export default SubmitOrder;
