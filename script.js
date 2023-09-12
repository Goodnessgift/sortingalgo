function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        
        arr[j + 1] = key;
    }
    return arr;
}

// Example usage:
let arr = [12, 11, 13, 5, 6];
let sortedArr = insertionSort(arr);
console.log(sortedArr);


    // EXPLANATION
    // In this implementation, we use two counters i and j. i is used to iterate through the array, while j is used to iterate through the sorted portion of the array.

    // The rest of the algorithm follows the same logic as the previous implementation. It picks the current element (key) and compares it with the elements in the sorted portion, shifting elements as needed to make space for key, and then inserts key at the correct position in the sorted portion.
    
    // This code will sort the array [12, 11, 13, 5, 6] using the Insertion Sort algorithm with two counters.
