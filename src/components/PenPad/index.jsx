import React, {useEffect,useState} from "react";
import { Row, Col } from "../Layouts";
import Tools from "../Tools";
import "./index.css";
import Whiteboard from "../Canvas";
import StatusBar from '../StatusBar';
import { useSelector } from "react-redux";
import actionTypes from "../../redux/types/actionTypes";

const { LANDSCAPE_VIEW, PORTRAIT_VIEW, GRID_VIEW } = actionTypes;

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
              <Whiteboard key={id} width={width} height={height - 32} /> // subtract statusbar height
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
  const [canvasSize,setCanvasSize] = useState({width: 0, height: 0});
  const view = useSelector(state => state.view.viewType);
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  useEffect(() => {
    let [width,height] = [null,null];
    if(view === LANDSCAPE_VIEW){
        width = screenWidth - screenWidth * 0.10; // reduce canvas width by 10%
        height = screenHeight - screenHeight * 0.15; // reduce canvas height by 15%
        setCanvasSize({width,height});
    }
    else if(view === PORTRAIT_VIEW) {
        width = screenWidth - screenWidth * 0.5; // reduce canvas width by 50%
        height = screenHeight - screenHeight * 0.15; // reduce canvas height by 15%
        setCanvasSize({width,height});
    }
  },[view,screenWidth,screenHeight]);
  return canvasSize;
}

export default PenPad;
