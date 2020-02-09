function checkAB(num) {
  // you can only write your code here!
  let indexA, indexB;
  for (j = 0; j < num.length; j++) {
    if (num[j] === 'a') {
      indexA = j;
      break;
    }
  }
  for (j = 0; j < num.length; j++) {
    if (num[j] === 'b' && j > indexA) {
      indexB = j;
      break;
    }
  }
  if (indexB === undefined) {
    return false;
  }
  if (indexB - indexA > 1 && indexB - indexA <= 4) {
    return true;
  }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false