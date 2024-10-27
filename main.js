function quickSort(arr, direction) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (i === Math.floor(arr.length / 2)) continue; 

      if (direction) { 
        if (arr[i] < pivot) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      } else { 
        if (arr[i] > pivot) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }
    }
      return [...quickSort(left, direction), pivot, ...quickSort(right, direction)];
}

let arr = [3, 6, 8, 10, 1, 2, 1];
console.log(arr)  
console.log(quickSort(arr, true)); 
  