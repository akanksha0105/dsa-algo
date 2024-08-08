class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	// Add a node to the graph
	addNode(node) {
		if (!this.adjacencyList[node]) {
			this.adjacencyList[node] = [];
		}
	}

	// Add an edge between two nodes
	addEdge(node1, node2) {
		if (!this.adjacencyList[node1]) {
			this.addNode(node1);
		}
		if (!this.adjacencyList[node2]) {
			this.addNode(node2);
		}
		this.adjacencyList[node1].push(node2);
		this.adjacencyList[node2].push(node1);
	}

	// Remove an edge between two nodes
	removeEdge(node1, node2) {
		this.adjacencyList[node1] = this.adjacencyList[node1].filter(
			(neighbor) => neighbor !== node2,
		);
		this.adjacencyList[node2] = this.adjacencyList[node2].filter(
			(neighbor) => neighbor !== node1,
		);
	}

	// Remove a node and its edges
	removeNode(node) {
		while (this.adjacencyList[node].length) {
			const adjacentNode = this.adjacencyList[node].pop();
			this.removeEdge(node, adjacentNode);
		}
		delete this.adjacencyList[node];
	}

	// Display the graph
	display() {
		for (let node in this.adjacencyList) {
			console.log(node + " -> " + this.adjacencyList[node].join(", "));
		}
	}

	bfs(source) {
		const visited = [];
		const outputArray = [];
		const queue = [source];

		while (queue?.length > 0) {
			const currNeighbor = queue.shift();
			outputArray.push(currNeighbor);
			visited[currNeighbor] = true;

			this.adjacencyList[currNeighbor].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					queue.push(neighbor);
				}
			});
		}

		return outputArray;
	}
}

// Example usage
const graph = new Graph();

// Add nodes
graph.addNode(0);
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);

// Add edges
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(2, 3);
graph.addEdge(2, 4);

// Display the graph
graph.display();
const bfsResult = graph.bfs(0);
console.log("BFS traversal order:", bfsResult);
