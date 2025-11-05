import { createGraph } from './createGraph.js';

const knightMovesGraph = createGraph();

function knightMoves(graph, start, end) {
  if (!isValidSquare(start) || !isValidSquare(end)) {
    throw new Error('Please enter valid coordinate(s)');
  }

  const queue = [start];
  const visited = [start];
  const parent = {};

  while (queue.length > 0) {
    const current = queue.shift();

    if (current === end) {
      const path = [end];

      while (path[0] !== start) {
        const parentNode = parent[path[0]];
        path.unshift(parentNode);
      }

      return path;
    }

    const neighbors = graph[current];

    for (let neighbor of neighbors) {
      const neighborKey = `${neighbor[0]},${neighbor[1]}`;

      if (!visited.includes(neighborKey)) {
        visited.push(neighborKey);
        parent[neighborKey] = current;
        queue.push(neighborKey);
      }
    }
  }

  return null;
}

function isValidSquare(coordinate) {
  const regex = /^([0-7]),([0-7])$/;
  const match = coordinate.match(regex);

  return match !== null;
}

console.log(knightMoves(knightMovesGraph, '0,0', '5,5'));
