import React from "react";
import { Row, Col } from "../Layouts";
import { ReactComponent as LandscapeView } from "../../assets/img/landscape-view.svg";
import { ReactComponent as PortraitView } from "../../assets/img/portrait-view.svg";
import { ReactComponent as GridView } from "../../assets/img/grid.svg";
import { ReactComponent as Trash } from "../../assets/img/trash.svg";
import { ReactComponent as DownloadAll } from '../../assets/img/download-all.svg';
import { ReactComponent as Download } from "../../assets/img/download.svg";
import { useDispatch, useSelector } from "react-redux";
import { viewChanger } from "../../redux/actions/view";
import actionTypes from "../../redux/types/actionTypes";
import "./index.css";

const { LANDSCAPE_VIEW, PORTRAIT_VIEW, GRID_VIEW } = actionTypes;

const StatusBar = () => {
  const changeView = useChangeView();
  const view = useSelector((state) => state.view.viewType);

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
    if (type) dispatch(viewChanger(type));
  };
};

export default StatusBar;