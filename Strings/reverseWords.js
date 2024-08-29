function reverseWords(s) {
    // Trim the input string to remove leading and trailing spaces
    // Split the string by one or more spaces into an array of words
    // Reverse the array of words
    // Join the reversed array into a single string with a single space separating each word
    return s.trim().split(/\s+/).reverse().join(' ');
}

// Example usage
const input = "the sky is blue";
const output = reverseWords(input);
console.log(output); // Output: "blue is sky the"