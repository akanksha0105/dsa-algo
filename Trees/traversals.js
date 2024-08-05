//Inorder
//Visit (Left Subtree, root, Right Subtree)

//Recursive

const inorderRecursive = (root) => {
	if (root === null) return;

	inorderRecursive(root.left);
	console.log(root.val);
	inorderRecursive(root.right);
};

//Time complexity = O(n) --> will be visiting every node
//Space Complexity = O(H) --> height of binary tree -- longest path from root to node -- function call stack

//Preorder
//Visit ( Root, Left Subtree,Right Subtree)

//Recursive
const preorderRecursive = (root) => {
	if (root === null) return;
	console.log(root.val);
	preorderRecursive(root.left);
	preorderRecursive(root.right);
};

//Postorder
//Visit ( Root, Right Subtree, Left Subtree,)

//Recursive
const postorderRecursive = (root) => {
	if (root === null) return;
	console.log(root.val);
	postorderRecursive(root.right);
	postorderRecursive(root.left);
};
