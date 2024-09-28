function flattenArray(arr, depth = Infinity) {
    const flattened = [];
    
    for (const element of arr) {
      if (Array.isArray(element) && depth > 0) {
        flattened.push(...flattenArray(element, depth - 1));
      } else {
        flattened.push(element);
      }
    }
    
    return flattened;
  }
  
  
  // Example usage
  const nestedArray = [1, [2, [3, 4], 5], [6, [7, [8, 9]]]];
  
  console.log(flattenArray(nestedArray, 1)); // [1, 2, [3, 4], 5, 6, [7, [8, 9]]]
  console.log(flattenArray(nestedArray, 2)); // [1, 2, 3, 4, 5, 6, 7, [8, 9]]
  console.log(flattenArray(nestedArray));    // [1, 2, 3, 4, 5, 6, 7, 8, 9] (default Infinity)
  


  //depth: levels of nesting