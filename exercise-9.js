function checkAB(num) {
  // you can only write your code here!
  let indexA = [], indexB =[];
  let isJarak3 = false;
  for(i = 0; i < num.length; i++){
    if(num[i] === 'a'){
        indexA.push(i);
    }
    if(num[i] === 'b'){
        indexB.push(i);
    }
  }
  for(i = 0; i < indexA.length; i++){
    for(j = 0; j < indexB.length; j++){
      if (indexA[i] > indexB[j] && indexA[i] - indexB[j] === 4) {
        isJarak3 = true;
      }
      if (indexA[i] < indexB[j] && indexB[j] - indexA[i] === 4) {
        isJarak3 = true;
      }
    }
  }
  return isJarak3;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false