import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Row } from '../Layouts';
import './index.css';

const Canvas = ({width,height}) => {
    const [canvasRef,startDrawing,stopDrawing,drawing] = useInitCanvas(width,height);

    return (
        <Row className="canvas">
            <canvas className="whiteboard" onMouseDown={startDrawing} onMouseMove={drawing} onMouseUp={stopDrawing} ref={canvasRef} />
        </Row>
    )
}

const useInitCanvas = (width,height,lineWidth = 5) => {
    const [isDrawing, setIsDrawing] = useState(false);
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        /* set canvas width and height + double pixel density */
        canvas.width = width * 2; 
        canvas.height = height * 2;
        
        /* set canvas css */
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
  
        const ctx = canvas.getContext("2d");
  
        ctx.scale(2,2);
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round";
        ctxRef.current = ctx;
    },[lineWidth,width,height]);

    const startDrawing = ({nativeEvent}) => {
        const { offsetX, offsetY } = nativeEvent;
        setIsDrawing(true);
        draw(offsetX,offsetY);
    }

    const stopDrawing = () => {
        const { current } = ctxRef;
        current.beginPath();
        setIsDrawing(false);
    }

    const draw = (x,y) => {
        const { current } = ctxRef;
        current.lineTo(x,y);
        current.stroke();
        current.beginPath();
        current.moveTo(x,y);
    }

    const drawing = ({nativeEvent}) => {
        if(!isDrawing) return;
        const {offsetX,offsetY} = nativeEvent;
        draw(offsetX,offsetY);
    }

    return [canvasRef,startDrawing,stopDrawing,drawing];
}

export default Canvas;