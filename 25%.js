//Given an integer array sorted in non-decreasing order, 
// there is exactly one integer in the array that occurs more than 25% of the time
// Return that integer

function specialInt(arr) {
    let len = arr.length;
    let quarter = Math.floor(len / 4);
    for (let i = 0; i < len - quarter; i++){
        if (arr[i] == arr[i + quarter]) {
            return arr[i];
        }
    }
    return -1;
}

console.log(specialInt([1,2,2,6,6,6,6,7,10]))