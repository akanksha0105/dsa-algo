function sortedSquares(nums) {
    const result = [];
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const leftSquare = nums[left] ** 2;
        const rightSquare = nums[right] ** 2;

        if (leftSquare > rightSquare) {
            result.unshift(leftSquare); // Add to the beginning
            left++;
        } else {
            result.unshift(rightSquare); // Add to the beginning
            right--;
        }
    }

    return result;
}

// Example Usage:
const nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums)); // Output: [0, 1, 9, 16, 100]
