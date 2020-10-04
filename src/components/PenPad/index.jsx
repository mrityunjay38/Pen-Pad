import React from "react";
import Row from "../Layouts/Row";
import Col from "../Layouts/Col";
import Tools from "../Tools";
import "./index.css";
import Whiteboard from "../Canvas";

const PenPad = () => {
  return (
    <div className="pen-pad">
      <Col width="5em">
        <Tools />
      </Col>
      <Col>
        <Whiteboard />
      </Col>
    </div>
  );
};

export default PenPad;
