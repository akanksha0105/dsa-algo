const removeDuplicates = (array) => {
    const n = array.length;
    let i = 0;
    for(let j = 1; j<n; j++){
        if(array[i]!=array[j]){
            i++;
            array[i] = array[j]
        }
        
    }

    return i+1;
}