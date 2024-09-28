const flattenArray = (array) => {
    let result = [];

    array.forEach(element => {
        if(Array.isArray(element)){
            result = result.concat(flattenArray(element))
        }else {
            result.push(element)
        }
    });
    
    return result;
}


const nestedArray = [1, [2, [3, 4], 5], [6, [7, [8, 9]]]];
const flatArray = flattenArray(nestedArray);
console.log(flatArray)