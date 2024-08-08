export const bfs = (source, adjacencyList) => {
	const visited = [];
	const outputArray = [];
	const queue = [source];

	while (queue?.length > 0) {
		const currNeighbor = queue.shift();
		outputArray.push(currNeighbor);
		visited[currNeighbor] = true;

		adjacencyList[currNeighbor].forEach((neighbor) => {
			if (!visited[neighbor]) {
				visited[neighbor] = true;
				queue.push(neighbor);
			}
		});
	}

	return outputArray;
};
