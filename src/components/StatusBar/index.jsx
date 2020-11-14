import React from "react";
import { Row, Col } from "../Layouts";
import { ReactComponent as LandscapeView } from "../../assets/img/landscape-view.svg";
import { ReactComponent as PortraitView } from "../../assets/img/portrait-view.svg";
import { ReactComponent as GridView } from "../../assets/img/grid.svg";
import { ReactComponent as Trash } from "../../assets/img/trash.svg";
import { ReactComponent as DownloadAll } from '../../assets/img/download-all.svg';
import { ReactComponent as Download } from "../../assets/img/download.svg";
import { ReactComponent as ZoomOut } from "../../assets/img/minus.svg";
import { ReactComponent as ZoomIn } from "../../assets/img/plus.svg";
import { useDispatch, useSelector } from "react-redux";
import { viewChanger,changeScale } from "../../redux/actions/view";
import { modal } from '../../redux/actions/modal';
import actionTypes from "../../redux/types/actionTypes";
import "./index.css";
import { useState } from "react";
import { useEffect } from "react";

const { LANDSCAPE_VIEW, PORTRAIT_VIEW, GRID_VIEW } = actionTypes;

const StatusBar = () => {
  const view = useSelector((state) => state.view.viewType);
  const changeView = useChangeView();
  const [min,max,scale,zoom] = useZoomInOut();

  return (
    <Row className="status-bar">
      <Col className="view-type" align="flex-start">
        <span
          className={`center${view === LANDSCAPE_VIEW ? " active" : ""}`}
          onClick={() => changeView(LANDSCAPE_VIEW)}
        >
          <LandscapeView />
        </span>
        <span
          className={`center${view === PORTRAIT_VIEW ? " active" : ""}`}
          onClick={() => changeView(PORTRAIT_VIEW)}
        >
          <PortraitView />
        </span>
        <span
          className={`center${view === GRID_VIEW ? " active" : ""}`}
          onClick={() => changeView(GRID_VIEW)}
        >
          <GridView />
        </span>
      </Col>
      <Col className="zoom-in-out center">
        <span className="minus center"><ZoomOut /></span>
        <span className="range center">
          <input type="range" name="zoom" min={min} max={max} value={scale} onChange={(e) => zoom(e)}/>
        </span>  
        <span className="plus center"><ZoomIn /></span>
      </Col>
      <Col className="page-info" align="flex-end">
        <span className="center" id="download-all">
          <DownloadAll />
        </span>
        <span className="center" id="download">
          <Download />
        </span>
        <span className="center" id="delete">
          <Trash />
        </span>
      </Col>
    </Row>
  );
};

const useChangeView = () => {
  const dispatch = useDispatch();
  
  return (type) => {
    const warning = {
      header: 'Layout Change',
      message: 'Are you sure?, canvas will reset.',
      onOk: () => dispatch(viewChanger(type))
    }
    dispatch(modal(warning));
  };
};

const useZoomInOut = () => {
  const min = 10;
  const max = 500;
  const [scale,setScale] = useState(100);
  const dispatch = useDispatch();

  const onZoom = ({target}) => setScale(target.value);

  // set default onload scale to 100%
  useEffect(() => {dispatch(changeScale(scale/100))},[scale,dispatch])

  return [min,max,scale,onZoom];
}

export default StatusBar;