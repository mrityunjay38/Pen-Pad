import React from "react";
import "./index.css";

const Popover = (props) => {
  const { offsetX, offsetY, children } = props;
  return (
    <div className="popover" style={{top: offsetY, left: offsetX}}>
      <div className="popover-mask" />
      <div className="popover-wrapper">
        <div className="popover-arrow" />
        <div className="popover-content">{children}</div>
      </div>
    </div>
  );
};

export default Popover;
