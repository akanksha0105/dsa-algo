const diffPossible = (A, B) => {
    let i = 0,
        j = 1;
    let n = A.length;

    while (i < n && j < n) {
        // Calculate the difference between A[j] and A[i]
        let diff = A[j] - A[i];

        if (diff === B && i != j) {
            return 1; // Found the pair with the required difference
        } else if (diff < B) {
            j++; // Move pointer j forward to increase the difference
        } else {
            i++; // Move pointer i forward to decrease the difference
        }

        // Avoid i overtaking j (both must be distinct)
        if (i === j) {
            j++;
        }
    }

    return 0; // No pair found
}