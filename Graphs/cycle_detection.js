// ************* Directed Graph *************

let directedGraph = {
  0: [1],
  1: [2],
  2: [3, 0], // Cycle here: 0 → 1 → 2 → 0
  3: [],
};

let undirectedGraph = {
  0: [1, 2],
  1: [0, 3],
  2: [0, 3],
  3: [1, 2], // Cycle here: 0 → 1 → 3 → 2 → 0
};

let hasCycleDirected = (graph) => {

}


console.log(hasCycleDirected(directedGraph));
