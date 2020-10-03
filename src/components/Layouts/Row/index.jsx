import React from "react";
import "./index.css";

const Row = (props) => {
  const { width, height, style } = props;
  return (
    <div className="row" style={{ width: width, height: height, ...style }}>
      {props.children}
    </div>
  );
};

export default Row;
