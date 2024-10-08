const twoSum = (numbers, target) => {
    const numMap = new Map();  // To store the number and its 1-based index
    let result = [];  // To store the best pair

    for (let i = 0; i < numbers.length; i++) {
        const complement = target - numbers[i];  // Calculate complement

        if (numMap.has(complement)) {
            // Get the index of the complement (1-based)
            const index1 = numMap.get(complement) + 1;
            const index2 = i + 1;

            // Check if we should update result
            if (!result.length || index2 < result[1] || (index2 === result[1] && index1 < result[0])) {
                result = [index1, index2];  // Store 1-based indices
            }
        }

        // Store the index of the current number in the map (0-based)
        if (!numMap.has(numbers[i])) {
            numMap.set(numbers[i], i);
        }
    }

    return result;
}