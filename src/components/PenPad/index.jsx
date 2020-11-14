import React, {useEffect,useState} from "react";
import { Row, Col } from "../Layouts";
import Tools from "../Tools";
import Whiteboard from "../Canvas";
import StatusBar from '../StatusBar';
import { useSelector } from "react-redux";
import actionTypes from "../../redux/types/actionTypes";
import "./index.css";

const { LANDSCAPE_VIEW, PORTRAIT_VIEW, GRID_VIEW } = actionTypes;

const PenPad = () => {
  const boards = useSelector((state) => state.boards);
  const [view,scale] = useSelector(state => [state.view.viewType,{transform: `scale(${state.view.zoom})`}]);
  const {width, height, viewWidth, viewHeight} = useConstructCanvas();

  return (
    <Row className="pen-pad">
      <Col width="5em">
        <Tools />
      </Col>
      <Col>
        <Row className={view}>
          <Col className="main-content" width={viewWidth} height={viewHeight}>
          <Col className="container">
          <Row className="boards" style={scale}>
            {boards.map((board, id) => (
              <Whiteboard key={id} width={width} height={height - 32} /> // subtract statusbar height
            ))}
          </Row>
          </Col>
          <StatusBar />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

const useConstructCanvas = () => {
  const [canvasSize,setCanvasSize] = useState({width: 0, height: 0,viewWidth: 0,viewHeight: 0});
  const view = useSelector(state => state.view.viewType);
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  useEffect(() => {
    let [width,height,viewWidth,viewHeight] = [null,null];
    if(view === LANDSCAPE_VIEW){
        width = screenWidth - screenWidth * 0.10; // reduce canvas width by 10%
        height = screenHeight - screenHeight * 0.15; // reduce canvas height by 15%
        setCanvasSize({width,height,viewWidth: width,viewHeight: height});
    }
    else if(view === PORTRAIT_VIEW) {
        width = screenWidth - screenWidth * 0.5; // reduce canvas width by 50%
        height = screenHeight - screenHeight * 0.15; // reduce canvas height by 15%
        setCanvasSize({width,height,viewWidth: width,viewHeight:height});
    }
    else if(view === GRID_VIEW) {
      width = Math.floor((screenWidth - screenWidth * 0.10)/2); // reduce canvas width by 10%, half it and round off to lower val 
      height = screenHeight - screenHeight * 0.15; // reduce canvas height by 15%
      viewWidth = screenWidth - screenWidth * 0.10; // reduce board width by 10%
      viewHeight = screenHeight - screenHeight * 0.15; // reduce board height by 15%
      setCanvasSize({width,height,viewWidth,viewHeight});
    }
  },[view,screenWidth,screenHeight]);
  return canvasSize;
}

export default PenPad;
