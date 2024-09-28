const rotateMatrix = (matrix) => {
    let n = matrix.length;

    // First, transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // Swap elements
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Then, reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }

    return matrix;
}

console.log(rotateMatrix([[1,2,3],[4,5,6],[7,8,9]]));