// E and F having no neigbhours to finish the loop
const smallGraph = {
  A: ["B", "C"],
  B: ["D"],
  C: ["E"],
  D: ["F"],
  E: [],
  F: []
};




const mediumGraph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B", "E"],
  E: ["C", "D"],
};

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




export const sGraph = smallGraph;
export const mGraph = mediumGraph;
export const lGraph = largeGraph;