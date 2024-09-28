var containsDuplicate = function (nums) {
	const s = new Set(nums);
	return s.size !== nums.length;
};


const repeatedNumber = function(nums){
	const seen = new Set();
 
	 for (const num of nums) {
		 if (seen.has(num)) {
			 return num; // Return the first repeated number
		 }
		 seen.add(num);
	 }
 
	 return -1;
	 }