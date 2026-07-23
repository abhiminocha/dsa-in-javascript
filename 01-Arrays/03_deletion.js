//Deletion in an Array 

// Method 1: Manual Shifting

function deleteAtIndex(arr, index){
    for ( let i = index; i < arr.length-1; i++) {
        arr[i] = arr[i +1];
    }
    arr.pop();
    return arr;
}

let numbers1 = [10,20,30,40,50];
console.log("Manual Deletion: ", deleteAtIndex(numbers1,2));

// Method 2: JS Built-in Shortcut

let numbers2 = [10,20,30,40,50];
numbers2.splice(2,1);
console.log("Splice Deletion: " , numbers2);