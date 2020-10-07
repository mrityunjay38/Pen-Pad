import React from "react";
import "./index.css";

export const Row = (props) => {
  const { width, height, style } = props;
  return (
    <div className="row" style={{ width: width, height: height, ...style }}>
      {props.children}
    </div>
  );
};

export const Col = (props) => {
    const { width, height, style } = props;
    return (
      <div className="col" style={{ width: width, height: height, ...style }}>
        {props.children}
      </div>
    );
  };