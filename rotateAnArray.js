const rotateAnArray = (nums, k) => {
	// Brute Force
	let n = nums.length;
	let newArr = [];

	if (k > n) k = k % n;

	for (let i = 0; i < k; i++) {
		newArr[i] = nums[n - k + i];
	}

	for (let i = k; i < n; i++) {
		newArr[i] = nums[i - k];
	}

	return newArr;
};

const reverse = (arr, start, end) => {
	while (start < end) {
		[arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
		start++;
		end--;
	}
};
const rotate = (nums, k) => {
	let n = nums.length;

	// If k is greater than n, reduce it to k % n
	k = k % n;
	if (k === 0) return; // No need to rotate if k is 0

	//last k elements
	reverse(nums, 0, n - k - 1);

	//last n-k elements
	reverse(nums, n - k, n - 1);
	//reverse the entire array
	reverse(nums, 0, n - 1);

	return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // Output: [5, 6, 7, 1, 2, 3, 4]
