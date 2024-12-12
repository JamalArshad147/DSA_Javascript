let graph = {
    0: [1, 2],
    1: [3],
    2: [3],
    3: [4],
    4: []
};

function topologicalSort(graph) {
    let inDegree = {}; // To track the in-degree of each node
    let queue = [];    // To process nodes with in-degree 0
    let sortedOrder = []; // To store the topological order

    // Initialize in-degree for all nodes
    for (let node in graph) {
        inDegree[node] = 0;
    }

    // Calculate in-degree for each node
    for (let node in graph) {
        for (let neighbor of graph[node]) {
            inDegree[neighbor] = (inDegree[neighbor] || 0) + 1;
        }
    }

    // Add all nodes with in-degree 0 to the queue
    for (let node in inDegree) {
        if (inDegree[node] === 0) {
            queue.push(node);
        }
    }

    // Process nodes with in-degree 0
    while (queue.length > 0) {
        let current = queue.shift(); // Get the first node
        sortedOrder.push(current);

        // Reduce the in-degree of its neighbors
        for (let neighbor of graph[current]) {
            inDegree[neighbor] -= 1;

            // If in-degree becomes 0, add to the queue
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    // Check for a cycle (if sortedOrder doesn't contain all nodes)
    if (sortedOrder.length !== Object.keys(graph).length) {
        throw new Error("The graph has a cycle, topological sort not possible.");
    }

    return sortedOrder;
}


console.log(topologicalSort(graph)); // Output: [0, 1, 2, 3, 4]
