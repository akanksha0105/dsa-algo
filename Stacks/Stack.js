class Stack {
	constructor() {
		this.items = [];
	}

	// Adding a new element - push
	push(element) {
		this.items.push(element);
	}

	// Removing and returning an element - pop
	pop() {
		if (this.items.length > 0) {
			return this.items.pop();
		} else {
			console.log("Stack is empty");
			return undefined;
		}
	}

	// Viewing the top element - peek
	peek() {
		if (this.items.length > 0) {
			return this.items[this.items.length - 1];
		} else {
			console.log("Stack is empty");
			return undefined;
		}
	}

	// Checking if stack is empty
	isEmpty() {
		return this.items.length === 0;
	}

	// Get the size of the stack
	size() {
		return this.items.length;
	}

	// Clear the stack
	clear() {
		this.items = [];
	}
}

// Usage
const stack = new Stack();

console.log("Initial stack:", stack); // Initial stack: Stack { items: [] }
stack.push(10);
stack.push(20);
console.log("Top element:", stack.peek()); // Top element: 20
console.log("Popped element:", stack.pop()); // Popped element: 20
console.log("Current size:", stack.size()); // Current size: 1
console.log("Is stack empty?", stack.isEmpty()); // Is stack empty? false
stack.clear();
console.log("Is stack empty after clearing?", stack.isEmpty()); // Is stack empty after clearing? true
