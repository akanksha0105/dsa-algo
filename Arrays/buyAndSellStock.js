const maxProfit = (array) => {

    let minSoFar= array[0];
    let result = 0;


    for(let i =1; i<array.length; i++){
        minSoFar = Math.min(minSoFar, array[i]);
        result = Math.max(result, array[i] - minSoFar)

    }

    return result;


}
const prices = [7, 10, 1, 3, 6, 9, 2];
console.log(maxProfit(prices));