import React from 'react';
import { Row } from '../Layouts';
import './index.css';

const Canvas = () => {
    return (
        <Row className="canvas">
            <canvas className="whiteboard" />
        </Row>
    )
}

export default Canvas;