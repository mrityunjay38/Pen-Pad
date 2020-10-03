import React from "react";
import "./index.css";

const Col = (props) => {
  const { width, height, style } = props;
  return (
    <div className="col" style={{ width: width, height: height, ...style }}>
      {props.children}
    </div>
  );
};

export default Col;