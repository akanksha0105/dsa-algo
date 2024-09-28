
//Recursive function
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
  


  //Iterative solution using stack


  //depth: levels of nesting
  //the time complexity is O(n) because every element in the array is visited once and combined via concatenation or spreading.

function flat(arr, depth = 1) {
  let result = [];
  let stack = arr.map(el => [el, depth]);
    console.log("stack", stack)
  while(stack.length) {
    const [item, itemDepth] = stack.pop();
    if(Array.isArray(item) && itemDepth > 0) {
      stack.push(...item.map(el => [el, itemDepth - 1]));
      console.log("stack updated", stack)
    } else {
      result.push(item)
    }
  }

  return result.reverse()
}


const arr = [1, [2], [3, [4]]];

console.log(flat(arr))