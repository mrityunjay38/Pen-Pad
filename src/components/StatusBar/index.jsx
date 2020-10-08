import React from "react";
import { Row, Col } from "../Layouts";
import { ReactComponent as PortraitView } from "../../assets/img/landscape-view.svg";
import { ReactComponent as LandscapeView } from "../../assets/img/portrait-view.svg";
import { ReactComponent as GridView } from "../../assets/img/grid.svg";
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
      <Col></Col>
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