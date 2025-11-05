export { createGraph };

function createGraph() {
  const graph = {};
  const knightMoves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      const key = `${x},${y}`;
      graph[key] = [];

      knightMoves.forEach((move) => {
        const newX = x + move[0];
        const newY = y + move[1];

        if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
          graph[key].push([newX, newY]);
        }
      });
    }
  }

  return graph;
}
