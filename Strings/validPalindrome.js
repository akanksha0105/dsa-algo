function isPalindrome(s) {
    // Use regex to remove non-alphanumeric characters and convert to lowercase
    let cleanedStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Initialize two pointers
    let left = 0;
    let right = cleanedStr.length - 1;
    
    // Use two-pointer approach to compare characters from both ends
    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false; // Not a palindrome
        }
        left++;
        right--;
    }
    
    return true; // Is a palindrome
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
