import React, {useEffect, useState, useRef} from "react";
import {createPortal}from 'react-dom';
import "./index.css";

const Popover = (props) => {
  const [popoverVisibility, setPopoverVisibility] = useState(false);
  const childrenRef = useRef(null);
  const contentRef = useRef(null);
  const {content, children} = props;
  const [offsetX, offsetY, setOffset] = useOffset();
  const popover = usePopover();
  
  useEffect(() => {
    if(popoverVisibility) {
      const childrenDOM = childrenRef.current.getBoundingClientRect();
      const popoverDOM = contentRef.current.getBoundingClientRect();
  
      const offset = {
        x: childrenDOM.left + (childrenDOM.width / 2) + 30, // 30px margin-right
        y: childrenDOM.top + (childrenDOM.height / 2) - (popoverDOM.height / 2),
      };
  
      setOffset(offset);
    }
  }, [offsetX, offsetY,setOffset,popoverVisibility]);

  return (
    <>
      <div className="center" ref={childrenRef} onClick={() => setPopoverVisibility(true)}>
        {children}
      </div>
      {popoverVisibility ? popover(
        <div className="popover" ref={contentRef} style={{ top: offsetY, left: offsetX }}>
          <div className="popover-mask" onClick={() => setPopoverVisibility(false)} />
          <div className="popover-wrapper">
            <div className="popover-arrow" />
            <div className="popover-content">{content}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

const usePopover = () => {
  const popoverRef = useRef(null);

  if(!document.getElementById('popovers')) {
    const container = document.createElement('div');
    popoverRef.current = container;
    popoverRef.current.id = 'popovers';
  }
  else {
    const container = document.getElementById('popovers');
    popoverRef.current = container;
  }

  const popovers = popoverRef.current;

  useEffect(() => {
    if(popovers === null && typeof document === undefined) return;
    document.body.appendChild(popovers);
    return () => document.body.removeChild(popovers);
  });

  return (content => popovers && createPortal(content,popovers))
};

const useOffset = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  return [offset.x, offset.y, setOffset];
};

export default Popover;
