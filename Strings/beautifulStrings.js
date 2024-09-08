function minOperationsToMakeBeautiful(str) {
    const n = str.length;
    let pattern1Ops = 0; // Count for pattern starting with '0'
    let pattern2Ops = 0; // Count for pattern starting with '1'

    // Loop through the string and compare with both patterns
    for (let i = 0; i < n; i++) {
        // Pattern 1: Starts with '0', so even indices should have '0' and odd indices should have '1'
        if (i % 2 === 0) {
            if (str[i] !== '0') pattern1Ops++; // Mismatch for pattern 1
            if (str[i] !== '1') pattern2Ops++; // Mismatch for pattern 2
        } else {
            if (str[i] !== '1') pattern1Ops++; // Mismatch for pattern 1
            if (str[i] !== '0') pattern2Ops++; // Mismatch for pattern 2
        }
    }

    // Return the minimum operations needed for either pattern
    return Math.min(pattern1Ops, pattern2Ops);
}

// Example usage:
console.log(minOperationsToMakeBeautiful('0010')); // Output: 1
