import React from "react";
import './index.css';

const Modal = (props) => {
    const {
      header = "Header",
      message = "Add your message",
      onCancel,
      onOk,
      children,
    } = props;

    const ok = () => onOk(true);
    const cancel = () => onCancel(true);

    return (
        <div className="modal">
            <div className="modal-body">
                <div className="header">
                    <div>{header}</div>
                </div>
                <div className="content">
                    <div className="message">{message}</div>
                    {children ? <div className="children">{children}</div> : null }
                </div>
                <div className="action">
                    <button type="button" className="cancel" onClick={cancel}>{'Cancel'}</button>
                    <button type="button" className="primary-button" onClick={ok}>{'OK'}</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;