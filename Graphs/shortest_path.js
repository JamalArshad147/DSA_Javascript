let graph = {
  A: [
    { vertex: "B", weight: 7 },
    { vertex: "E", weight: 1 },
  ],
  B: [
    { vertex: "C", weight: 3 },
    { vertex: "E", weight: 8 },
  ],
  C: [{ vertex: "D", weight: 6 }],
  D: [{ vertex: "E", weight: 7 }],
  E: [{ vertex: "C", weight: 2 }],
};

// ---------------------------------------------------------- Dijkstra's Algorithm

const dijkstra = (graph, source) => {
  let distances = new Map();
  let visited = new Set();
  let priorityQueue = [];

  for (const vertex in graph) {
    distances.set(vertex, Infinity);
  }
  distances.set(source, 0);

  priorityQueue.push({ vertex: source, distance: 0 });

  while (priorityQueue.length > 0) {
    priorityQueue.sort((a, b) => a.distance - b.distance);
    let currentVertex = priorityQueue.shift().vertex;

    if (visited.has(currentVertex)) continue;
    visited.add(currentVertex);

    for (const neighbor of graph[currentVertex]) {
      let distance = neighbor.weight + distances.get(currentVertex);

      if (distance < distances.get(neighbor.vertex)) {
        distances.set(neighbor.vertex, distance);
        priorityQueue.push({ vertex: neighbor.vertex, distance: distance });
      }
    }
  }

  return distances;
};

// console.time();
// console.log("*** Dijkstra's Algorithm ***");
// console.table(dijkstra(graph, 'A'));
// console.timeEnd();

// ---------------------------------------------------------- Bellman-Ford Algorithm

let graphWithNegativeCycle = {
  A: [{ vertex: "B", weight: 1 }],
  B: [{ vertex: "C", weight: -2 }],
  C: [{ vertex: "A", weight: -1 }],
};

const bellman_ford = (graph, source) => {
  let distances = new Map();

  // initialize distance array
  for (const vertex in graph) {
    distances.set(vertex, Infinity);
  }
  distances.set(source, 0);

  // relaxition for each vertex for V-1 times
  let vertices = Object.keys(graph);
  for (let index = 0; index < vertices.length - 1; index++) {
    for (const vertex in graph) {
      for (const neighbor of graph[vertex]) {
        let newDistance = distances.get(vertex) + neighbor.weight;
        if (newDistance < distances.get(neighbor.vertex)) {
          distances.set(neighbor.vertex, newDistance);
        }
      }
    }
  }

  // check negative cycle
  for (const vertex in graph) {
    for (const neighbor of graph[vertex]) {
      let newDistance = distances.get(vertex) + neighbor.weight;
      if (newDistance < distances.get(neighbor.vertex)) {
        throw new Error("Graph has a negative-weight cycle.");
      }
    }
  }

  return distances;
};

// console.time();
// console.log("*** Bellman-Ford Algorithm ***");
// console.table(bellman_ford(graph, "A"));
// // console.log(bellman_ford(graphWithNegativeCycle, "B"));
// console.timeEnd();

// ---------------------------------------------------------- Floyd-Warshall Algorithm -> All Pairs Shortest Path

let floyd_graph = {
    'A': [{ vertex: 'B', weight: 3 }, { vertex: 'C', weight: 8 }, { vertex: 'E', weight: -4 }],
    'B': [{ vertex: 'D', weight: 1 }, { vertex: 'E', weight: 7 }],
    'C': [{ vertex: 'B', weight: 4 }],
    'D': [{ vertex: 'A', weight: 2 }, { vertex: 'C', weight: -5 }],
    'E': [{ vertex: 'D', weight: 6 }]
};



const floyd_warshall = () => {
    let vertices = Object.keys(floyd_graph);
    let distances = {};

    for(const from of vertices) {
        distances[from] = {};
        for (const to of vertices) {
            if(from === to) {
                distances[from][to] = 0;
            } else {
                const edge = graph[from].find(neighbor => neighbor.vertex === to);
                distances[from][to] = edge ? edge.weight: Infinity;
            }
        }
    }

    for (const k of vertices) {
        for (const i of vertices) {
            for (const j of vertices) {
                let newDistance = distances[i][k] + distances[k][j];
                if(newDistance < distances[i][j]) {
                    distances[i][j] = newDistance;
                }
            }
        }
    }

    return distances;
};

console.time();
console.log("*** Floyd-Warshall Algorithm ***");
console.table(floyd_warshall(graph, "A"));
console.timeEnd();