"use client"
import { useEffect, useRef } from 'react';

const FullScreenCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const drawLines = (count) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < count; i++) {
                const baseX = (i - count / 2) * 50 + canvas.width / 2;
                const deviation = (Math.random() - 0.5) * 20;
                const startX = baseX + deviation;
                const endX = baseX + deviation;
                ctx.beginPath();
                ctx.moveTo(startX, 0);
                ctx.lineTo(endX, canvas.height);
                ctx.strokeStyle = `hsl(${Math.random() }, 100%, 50%)`;
                ctx.lineWidth = 2;
                ctx.stroke();
            }
        };

        drawLines(50);
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh' }} />;
};

export default FullScreenCanvas