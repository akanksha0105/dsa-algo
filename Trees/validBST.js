function helper(root, min, max) {
	// An empty tree is a BST
	if (root === null) {
		return true;
	}

	// False if this node violates the min/max constraint
	if (root.data < min || root.data > max) {
		return false;
	}

	// Otherwise, check the subtrees recursively, modifying the min or max constraint
	const leftSearch = helper(root.left, min, root.data);
	const rightSearch = helper(root.right, root.data, max);

	return leftSearch && rightSearch;
}

function validateBST(root) {
	return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}
