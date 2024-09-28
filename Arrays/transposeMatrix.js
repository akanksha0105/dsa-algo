function transpose(matrix) {
    // Check if the matrix is empty
    if (matrix.length === 0) return [];
    
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    // Create a new array with transposed dimensions
    const transposed = new Array(cols).fill(null).map(() => new Array(rows));
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            transposed[j][i] = matrix[i][j]; // Swap indices
        }
    }
    
    return transposed;
}

// Example usage:
const A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const B = transpose(A);
console.log(B);
