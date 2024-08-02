const findPeakElement = (nums) => {
	let n = nums.length;
	let start = 0,
		end = n - 1;

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);

		// Checking if the middle element is a peak element
		if (
			(mid === 0 || nums[mid - 1] <= nums[mid]) &&
			(mid === n - 1 || nums[mid] >= nums[mid + 1])
		)
			return mid;
		if (mid > 0 && nums[mid - 1] >= nums[mid]) end = mid - 1;
		else start = mid + 1;
	}

	return -1;
};

console.log(findPeakElement([40, 10, 30, 20])); // Output: 0
