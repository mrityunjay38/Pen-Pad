import React from "react";
import "./index.css";

export const Row = (props) => {
  const { width, height, style } = props;
  let { className, align } = props;
  className = className ? ' ' + className : '';
  align = align ? ' ' + align : '';
  return (
    <div className={'row' + className + align} style={{ width: width, height: height, ...style }}>
      {props.children}
    </div>
  );
};

export const Col = (props) => {
  const { width, height, style } = props;
  let { className, align } = props;
  className = className ? ' ' + className : '';
  align = align ? ' ' + align : '';
    return (
      <div className={'col' + className + align} style={{ width: width, height: height, ...style }}>
        {props.children}
      </div>
    );
  };