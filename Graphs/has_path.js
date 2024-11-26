import { sGraph } from "./graphs_object.js";

// *************** Undirected Graphs ****************

const edges = [
  ["a", "b"],
  ["a", "c"],
  ["b", "d"],
  ["c", "e"],
  ["d", "e"],
  ["e", "f"],
  ["g", "h"],
  ["h", "i"],
  ["i", "j"],
];

const createGraph = (edges) => {
  let graph = {};

  for (const [a, b] of edges) {
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

const graph = createGraph(edges);

const has_path_undirected = (graph, src, des, visited) => {
  if(!(src in graph) || !(des in graph)) {
    return false;
  }
  
  if (visited.has(src)) {
    return false;
  }

  visited.add(src);
  
  if (src === des) {
    return true;
  }
  
  for (const neigbhor of graph[src]) {
    if(has_path_undirected(graph, neigbhor, des, visited)) {
      return true;
    }
  }

  return false;
};

// console.log(has_path_undirected(graph, "b", "a", new Set()));

// *************** Directed Graphs ****************

const has_path_directed = (graph, src, des) => {
  if (!(src in graph) || !(des in graph)) return false;

  if (src === des) {
    return true;
  }

  for (const neigbhour of graph[src]) {
    if (has_path_directed(graph, neigbhour, des)) {
      return true;
    }
  }

  return false;
};

// console.log(has_path_directed(sGraph, "A", "C"));
// console.log(has_path_directed(sGraph, "Z", "A")); // Source not in graph
