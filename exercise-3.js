function cariMedian(arr) {
  // you can only write your code here!
  let indexMedian = 0;
  let mean = 0;
  if (arr.length % 2 === 0) {
    indexMedian = Math.floor(arr.length / 2) ;
    mean = (arr[indexMedian] + arr[indexMedian - 1]) / 2; 
    return mean;
  } else {
    indexMedian = Math.floor(arr.length / 2) ;
    return arr[indexMedian];
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5