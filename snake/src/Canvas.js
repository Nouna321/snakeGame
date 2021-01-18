import React, { useRef, useEffect } from 'react'

const Canvas = (props) => {
    const canvasRef = useRef(null)
    const draw = (ctx) => {
        ctx.fillStyle = '#f1c40f'
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        const id = document.getElementById('zone')
        const intervalID = setInterval(draw, 10)

        //Our first draw
        context.fillStyle = '#000000'
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)
        draw(context)
    }, [draw])

    return <canvas className='w-1/2 md:w-full h-screen' ref={canvasRef} {...props} />
}

export default Canvas
