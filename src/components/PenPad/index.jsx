import React from "react";
import Row from "../Layouts/Row";
import Col from "../Layouts/Col";
import Tools from "../Tools";
import "./index.css";
import Whiteboard from "../Canvas";
import StatusBar from '../StatusBar';
import { useSelector } from "react-redux";

const PenPad = () => {
  const boards = useSelector((state) => state.boards);

  return (
    <div className="pen-pad">
      <Col width="5em">
        <Tools />
      </Col>
      <Col>
        <div className="main-content">
          <div className="boards">
            {boards.map((board, id) => (
              <Whiteboard key={id} />
            ))}
          </div>
          <StatusBar />
        </div>
      </Col>
    </div>
  );
};

export default PenPad;
