const smallGraph = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};

console.log(smallGraph);

const mediumGraph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B", "E"],
  E: ["C", "D"],
};

console.log(mediumGraph);

const largeGraph = {
  A: ["B", "C", "D"],
  B: ["A", "E"],
  C: ["A", "F", "G"],
  D: ["A", "H"],
  E: ["B", "F"],
  F: ["C", "E", "G"],
  G: ["C", "F", "H"],
  H: ["D", "G"],
};

console.log(largeGraph);
