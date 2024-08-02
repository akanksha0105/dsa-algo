class Queue {
	constructor() {
		// Implement the Constructor
		this.items = [];
	}

	/*----------------- Public Functions of Queue -----------------*/

	isEmpty() {
		return this.items.length === 0;
	}

	enqueue(data) {
		// Implement the enqueue() function
		this.items.push(data);
	}

	dequeue() {
		// Implement the dequeue() function
		//if queue is empty
		if (this.isEmpty()) {
			throw new Error("Queue is empty");
		}
		return this.items.shift();
	}

	front() {
		// Implement the front() function
		if (this.isEmpty()) {
			throw new Error("Queue is empty");
		}
		return this.items[0];
	}

	size() {
		return this.items.length;
	}

	// Print all elements in the queue
	print() {
		console.log(this.items.toString());
	}
}

// Example usage
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.front()); // Output: 2
queue.print(); // Output: 2,3
