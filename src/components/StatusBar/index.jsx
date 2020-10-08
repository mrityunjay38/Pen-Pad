import React from "react";
import { Row, Col } from "../Layouts";
import { ReactComponent as PortraitView } from "../../assets/img/landscape-view.svg";
import { ReactComponent as LandscapeView } from "../../assets/img/portrait-view.svg";
import { ReactComponent as GridView } from "../../assets/img/grid.svg";
import { ReactComponent as Trash } from "../../assets/img/trash.svg";
import { ReactComponent as DownloadAll } from '../../assets/img/download-all.svg';
import { ReactComponent as Download } from "../../assets/img/download.svg";
import { useDispatch, useSelector } from "react-redux";
import { viewChanger } from "../../redux/actions/view";
import "./index.css";

const StatusBar = () => {
  const changeView = useChangeView();
  const view = useSelector((state) => state.view.viewType);

  return (
    <Row className="status-bar">
      <Col className="view-type" align="flex-start">
        <span
          className={`center${view === "landscape" ? " active" : ""}`}
          onClick={() => changeView("landscape")}
        >
          <LandscapeView />
        </span>
        <span
          className={`center${view === "portrait" ? " active" : ""}`}
          onClick={() => changeView("portrait")}
        >
          <PortraitView />
        </span>
        <span
          className={`center${view === "grid" ? " active" : ""}`}
          onClick={() => changeView("grid")}
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