let graph = {
    1: [],
    2: [3],
    3: [2],
    4: [],
    5: [6],
    6: [5],
    7: [],
    8: [9],
    9: [8],
    10: [],
    11: [12],
    12: [11],
    13: [],
    14: [],
    15: [16, 17],
    16: [15],
    17: [15],
    18: [],
    19: [20],
    20: [19],
    21: [],
    22: [23],
    23: [22],
    24: [],
    25: [],
    26: [],
    27: [28],
    28: [27],
    29: [],
    30: [],
    31: [32],
    32: [31],
    33: [],
    34: [35],
    35: [34],
    36: [],
    37: [],
    38: [],
    39: [40],
    40: [39],
    41: [],
    42: [],
    43: [44, 45],
    44: [43],
    45: [43],
    46: [],
    47: [],
    48: [],
    49: [],
    50: [51],
    51: [50],
    52: [],
    53: [54],
    54: [53],
    55: [],
    56: [],
    57: [58],
    58: [57],
    59: [],
    60: [],
    61: [62],
    62: [61],
    63: [],
    64: [65],
    65: [64],
    66: [],
    67: [],
    68: [],
    69: [],
    70: [71],
    71: [70],
    72: [],
    73: [],
    74: [],
    75: [],
    76: [],
    77: [],
    78: [79],
    79: [78],
    80: [],
    81: [],
    82: [],
    83: [84],
    84: [83],
    85: [],
    86: [],
    87: []
  };
  

console.log(count_components(graph)); // 65 answer

function count_components(graph) {
  let count = 0;
  let visited = new Set(); 
  for (const node in graph) { 
    if (!visited.has(String(node))) {
      count += BFS(graph, node, visited);
    }
  }
  return count;
}

function BFS(graph, src, visited) {
  let queue = [src];
  while (queue.length > 0) {
    let curr = queue.shift();
    for (const neighbor of graph[curr]) {
      if (!visited.has(String(neighbor))) {
        visited.add(String(neighbor));
        
        queue.push(neighbor);
      }
    }
  }
  return 1;
}
