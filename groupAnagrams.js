function getGroupedAnagrams(inputStr, n) {
	const map = new Map();

	for (let word of inputStr) {
		const sortedWord = word.split("").sort().join("");

		if (!map.has(sortedWord)) {
			map.set(sortedWord, []);
		}

		map.get(sortedWord).push(word);
	}

	const result = [];

	// Add all the anagram groups from the map to the result list
	for (let group of map.values()) {
		result.push(group);
	}

	return result;
}

// Example :
const inputStr = ["eat", "tea", "tan", "ate", "nat", "bat"];
const n = inputStr.length;
console.log(getGroupedAnagrams(inputStr, n));
