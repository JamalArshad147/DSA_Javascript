import { sGraph } from "./graphs.js";
import { mGraph } from "./graphs.js";
import { lGraph } from "./graphs.js";

BFS(sGraph, "A");

function BFS(graph, src) {
  let queue = [src];
  while (queue.length > 0) {
    let current = queue.shift();
    console.log(current);
    for (const neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
}

function DFS_Recursive() {}

function DFS_Iterative() {}
