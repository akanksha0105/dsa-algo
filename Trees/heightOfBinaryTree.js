const heightOfBinaryTree = (root) => {
	if (root == null) return 0;

	return (
		1 + Math.max(heightOfBinaryTree(root.left), heightOfBinaryTree(root.right))
	);
};
