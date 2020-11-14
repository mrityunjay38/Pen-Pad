import React from "react";
import PenPad from './components/PenPad';
import Modal from './components/Modal';
import { useSelector } from "react-redux";
import "./assets/css/App.css";

function App() {
  const modalProps = useSelector(state => state.modal);

  return (
    <div className="App">
      <PenPad />
      <Modal {...modalProps} />
    </div>
  );
}

export default App;
