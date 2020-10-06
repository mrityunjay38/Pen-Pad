import React, { useEffect } from "react";
import { ReactComponent as Pen } from "../../assets/img/pen.svg";
import { ReactComponent as Eraser } from "../../assets/img/eraser.svg";
import { ReactComponent as Palette } from "../../assets/img/palette.svg";
import { ReactComponent as NewPad } from "../../assets/img/add.svg";
import { useDispatch, useSelector } from "react-redux";
import { createNewBoard } from "../../redux/actions/boards";
import "./index.css";

const Tools = () => {
    const newPad = useCreateBoard();

    useEffect(newPad,[]);

  return (
    <div className="left-sidebar">
      <div className="tools">
        <span><Pen /></span>
        <span><Eraser /></span>
        <span><Palette /></span>
      </div>
      <div className="add-canvas">
        <span><NewPad onClick={() => newPad()} /></span>
      </div>
    </div>
  );
};

const useCreateBoard = () => {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards);

  return () => {
    if (boards.length === 0) dispatch(createNewBoard(1));
    else {
      const numOfBoards = boards.length;
      dispatch(createNewBoard(numOfBoards + 1));
    }
  }
};

export default Tools;
