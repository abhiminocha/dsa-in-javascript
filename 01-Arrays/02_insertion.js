// Insertion of an array

// Method 1 : Manual DSA Logic(Loop & Shiting) 

function insertAtIndex(arr, element, index) {
    for(let i = arr.length - 1; i >= index; i--){
        arr[ i + 1 ] = arr[i]
    }
    arr[index] = element;
    return arr;
}

let numbers = [1,2,4,5];
console.log("Manual Insertion : ", insertAtIndex(numbers, 3, 2))


// Method 2 : JS Built-in Shortcut

let count = [1, 2, 4, 5];
count.splice(2, 0, 3);
console.log(count);