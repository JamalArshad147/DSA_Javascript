let graph = {
  1: [2],
  2: [1],
  3: [4],
  4: [3, 5],
  5: [4, 6],
  6: [5],
  7: [],
  8: [9, 10],
  9: [8],
  10: [8],
  11: [],
  12: [13],
  13: [12],
  14: [15, 16, 17],
  15: [14],
  16: [14],
  17: [14],
  18: []
};




console.log(largest_components(graph)); // 4

function largest_components(graph) {
  let largest_component = 0;
  let visited = new Set(); 
  for (const node in graph) { 
    if (!visited.has(String(node))) {
      largest_component = Math.max(largest_component, BFS(graph, node, visited));
    }
  }
  return largest_component;
}

function BFS(graph, src, visited) {
  let size = 1;
  let queue = [src];
  visited.add(String(src));

  while (queue.length > 0) {
    let curr = queue.shift();
    for (const neighbor of graph[curr]) {
      if (!visited.has(String(neighbor))) {
        visited.add(String(neighbor));
        queue.push(neighbor);
        size++;
      }
    }
  }
  return size;
}
