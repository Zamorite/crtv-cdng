const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080, 1080]
};



const sketch = () => {
  return ({ context, width, height }) => {

    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    context.strokeStyle = 'white';

    const gridSize = 4

    let totalPadding = width * 0.5
    let padding = totalPadding / (gridSize + 1)

    let cellSize = (width * 0.5) / gridSize


    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {

        context.lineWidth = Math.random() > 0.5 ? 5 : 30

        context.beginPath();
        context.rect(
          padding + (cellSize + padding) * i,
          padding + (cellSize + padding) * j,
          cellSize,
          cellSize
        )
        context.stroke()
      }
    }
  };
};

canvasSketch(sketch, settings);
