import React from "react";
import { Row, Col } from "../Layouts";
import Tools from "../Tools";
import "./index.css";
import Whiteboard from "../Canvas";
import StatusBar from '../StatusBar';
import { useSelector } from "react-redux";

const PenPad = () => {
  const boards = useSelector((state) => state.boards);
  const view = useSelector(state => state.view.viewType);

  return (
    <Row className="pen-pad">
      <Col width="5em">
        <Tools />
      </Col>
      <Col>
        <Row className={view}>
          <Col className="main-content">
          <Row className="boards">
            {boards.map((board, id) => (
              <Whiteboard key={id} />
            ))}
          </Row>
          <StatusBar />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default PenPad;
