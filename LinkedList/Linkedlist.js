class LinkedList {
	constructor() {
		this.head = null;
	}

	addAtEnd(data) {
		const newNode = new Node(data);
		if (this.head === null) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next !== null) {
				current = current.next;
			}
			current.next = newNode;
		}
	}

	addAtBeginning(data) {
		const newNode = new Node(data);
		newNode.next = this.head;
		this.head = newNode;
	}
	display() {
		let current = this.head;
		while (current !== null) {
			console.log(current.data);
			current = current.next;
		}
	}
}

// Example usage:
const list = new LinkedList();
list.addAtEnd(10);
list.addAtEnd(20);
list.addAtEnd(30);
list.display();
