import React from "react";
import { Row, Col } from "../Layouts";
import { ReactComponent as VerticalView } from "../../assets/img/vertical-page-view.svg";
import { ReactComponent as HorizontalView } from "../../assets/img/horizontal-page-view.svg";
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
          className={`center${view === "vertical" ? " active" : ""}`}
          onClick={() => changeView("vertical")}
        >
          <VerticalView />
        </span>
        <span
          className={`center${view === "horizontal" ? " active" : ""}`}
          onClick={() => changeView("horizontal")}
        >
          <HorizontalView />
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