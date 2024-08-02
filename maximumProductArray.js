/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (arr) {
	let maxEnding = arr[0];
	let minEnding = arr[0];
	let res = arr[0];

	for (let i = 1; i < arr.length; i++) {
		let temp = maxEnding;
		maxEnding = Math.max(arr[i], maxEnding * arr[i], minEnding * arr[i]);
		minEnding = Math.min(arr[i], temp * arr[i], minEnding * arr[i]);
		res = Math.max(res, maxEnding);
	}

	return res;
};
