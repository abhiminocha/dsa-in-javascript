// Binary Search in a Sorted Array 

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        //Case 1 : Middle element hii target nikla 
        if (arr[mid] === target) {
            return mid;
        }

        // Case 2 : Target Chota hai left half mai jao 
        if (target < arr[mid]) {
            high = mid - 1;
        }
        //Case 3 : Target bada hai, right half mai jao 
        else{
            low = mid + 1;
        }
    }

    return -1;
}

let sortedNumbers = [10,20,30,40,50,60,70];
console.log("Index of 50:",binarySearch(sortedNumbers, 50));
console.log("Index of 90:",binarySearch(sortedNumbers, 90));