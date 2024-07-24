// Mainting 

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// Example usage:
let arr = [5, 2, 9, 1, 5, 6];
let sortedArr = insertionSort(arr);
console.log(sortedArr);  // Output: [1, 2, 5, 5, 6, 9]
