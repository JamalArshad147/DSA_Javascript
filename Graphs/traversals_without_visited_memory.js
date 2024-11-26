import { sGraph } from "./graphs_object.js";
import { mGraph } from "./graphs_object.js";
import { lGraph } from "./graphs_object.js";


// ********************** these traversals don't keep track of visited nodes *************************

// BFS(sGraph, "A");
// DFS_Iterative(sGraph, "A");
// DFS_Recursive(sGraph, "A");

function BFS(graph, src) {
  let queue = [src];
  console.log(`***** Breadth First Search *****`);
  while (queue.length > 0) {
    let current = queue.shift();
    console.log(current);
    for (const neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  console.log(`----------------------------------`);
}

function DFS_Recursive(graph, src) {
  console.log(src);
  for (const neighbor of graph[src]) {
    DFS_Recursive(graph, neighbor);
  }
}

function DFS_Iterative(graph, src) {
  let stack = [src];
  console.log(`***** Depth First Search *****`);
  while (stack.length > 0) {
    let current = stack.pop();
    console.log(current);
    for (const neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
  console.log(`----------------------------------`);
}
