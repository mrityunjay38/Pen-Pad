import React from "react";
import { useDispatch } from "react-redux";
import { resetModal } from '../../redux/actions/modal';
import "./index.css";

const Modal = (props) => {
  const { visibility, header, message, onCancel, onOk, children } = props;
  const dispatch = useDispatch();
  
  const cancel = () => {
    onCancel();
    dispatch(resetModal());
  }

  const ok = () => {
    onOk();
    dispatch(resetModal());
  }

  return (
    <>
      {visibility ? (
        <div className="modal">
          <div className="modal-body">
            <div className="header">
              <div>{header}</div>
            </div>
            <div className="content">
              <div className="message">{message}</div>
              {children ? <div className="children">{children}</div> : null}
            </div>
            <div className="action">
              <button type="button" className="cancel" onClick={cancel}>
                {"Cancel"}
              </button>
              <button type="button" className="primary-button" onClick={ok}>
                {"OK"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
