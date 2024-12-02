let graph = {
    'A': [{ vertex: 'B', weight: 7}, {vertex: 'E', weight: 1 }],
    'B': [{ vertex: 'C', weight: 3}, {vertex: 'E', weight: 8 }],
    'C': [{ vertex: 'D', weight: 6 }],
    'D': [{ vertex: 'E', weight: 7 }],
    'E': [{ vertex: 'C', weight: 2 }]
};

const dijkstra = (graph, source) => {
    let distances = new Map();
    let visited = new Set();
    let priorityQueue = [];

    for (const vertex in graph) {
        distances.set(vertex, Infinity);
    }
    distances.set(source, 0);

    priorityQueue.push({vertex: source, distance: 0});

    while (priorityQueue.length > 0) {
        priorityQueue.sort((a, b) => a.distance - b.distance);
        let currentVertex = (priorityQueue.shift()).vertex;
        
        if(visited.has(currentVertex)) continue;
        visited.add(currentVertex);

        for (const neighbor of graph[currentVertex]) {
            let distance = neighbor.weight + distances.get(currentVertex);
            
            if(distance < distances.get(neighbor.vertex)) {
                distances.set(neighbor.vertex, distance);
                priorityQueue.push({vertex: neighbor.vertex, distance: distance});
            }
        }
    }

    return distances;
}

console.log(dijkstra(graph, 'A'));
