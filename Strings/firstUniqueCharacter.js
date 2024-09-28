function firstUniqChar(s) {

    // Array to store the first occurrence index of each character
    let freq = new Array(26).fill(-1);

    // Iterate through the string
    for (let i = 0; i < s.length; i++) {
        let cur = s.charCodeAt(i) - 'a'.charCodeAt(0);
        if (freq[cur] === -1) {
            freq[cur] = i;
        } else {
            freq[cur] = -2;
        }
    }

    // Initialize idx to maximum integer value
    let idx = Number.MAX_SAFE_INTEGER;

    // Find the smallest index which is not marked as -1 or -2
    for (let i = 0; i < 26; i++) {
        if (freq[i] >= 0) {
            idx = Math.min(idx, freq[i]);
        }
    }

    // If no non-repeating character is found, return -1
    return idx === Number.MAX_SAFE_INTEGER ? -1 : idx;
}

// Example usage
let s = "geeksforgeeks";
console.log(firstUniqChar(s));
