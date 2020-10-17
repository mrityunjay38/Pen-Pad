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
  const {width, height} = useConstructCanvas();

  return (
    <Row className="pen-pad">
      <Col width="5em">
        <Tools />
      </Col>
      <Col>
        <Row className={view}>
          <Col className="main-content" width={width} height={height}>
          <Row className="boards">
            {boards.map((board, id) => (
              <Whiteboard key={id} width={width} height={height} />
            ))}
          </Row>
          <StatusBar />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

const useConstructCanvas = () => {
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

    if(screenWidth > screenHeight){
      return {
        width: screenWidth - screenWidth * 0.10, // reduce canvas width by 15%
        height: screenHeight - screenHeight * 0.15 // reduce canvas height by 10%
      }
    }
    else {
      return {
        width: screenWidth - screenWidth * 0.15, // reduce canvas width by 10%
        height: screenHeight - screenHeight * 0.10 // reduce canvas height by 10%
      }
    }
}

export default PenPad;
