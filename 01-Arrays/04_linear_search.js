// Linear Search in an Array 

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

let numbers = [45, 12, 89, 23, 67];
console.log("Index of 23: ", linearSearch(numbers,23));
console.log("Index of 100: ", linearSearch(numbers,100));