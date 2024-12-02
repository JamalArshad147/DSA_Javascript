let graph = {
    'A': [ {vertex: 'B', distance: 7}, {vertex: 'E', distance: 1}],
};


for (const neighbor of graph['A']) {
    
    console.log(neighbor.vertex);
}
