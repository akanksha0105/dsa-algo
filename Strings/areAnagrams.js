function areAnagrams(str1, str2) {
    // If lengths are different, they cannot be anagrams
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Create an array to track character counts (Assuming ASCII characters)
    let charCount = new Array(256).fill(0);  // 256 for extended ASCII
    
    // Count characters in the first string and decrement for the second string
    for (let i = 0; i < str1.length; i++) {
      charCount[str1.charCodeAt(i)]++;
      charCount[str2.charCodeAt(i)]--;
    }
  
    // Check if all counts are zero
    for (let count of charCount) {
      if (count !== 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example Usage:
  console.log(areAnagrams('listen', 'silent'));  // Output: true
  console.log(areAnagrams('hello', 'world'));    // Output: false
  