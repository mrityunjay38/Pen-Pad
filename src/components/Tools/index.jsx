import React from 'react';
import { ReactComponent as Pen } from '../../assets/img/pen.svg';
import { ReactComponent as Eraser } from '../../assets/img/eraser.svg';
import { ReactComponent as Palette } from '../../assets/img/palette.svg';
import { ReactComponent as NewPad } from '../../assets/img/add.svg';
import './index.css';

const Tools = () => {
    return (
        <div className="left-sidebar">
            <div className="tools">
                <span><Pen /></span>
                <span><Eraser /></span>
                <span><Palette /></span>
            </div>
            <div className="add-canvas">
                <span><NewPad /></span>
            </div>
        </div>
    )
}

export default Tools;