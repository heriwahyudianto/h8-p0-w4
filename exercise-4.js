function cariModus(arr) {
  // you can only write your code here!
  // case sama semua
  let samaSemua = true;
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i+1]) {
      samaSemua = false;
    }
  }
  if (samaSemua) {
    return -1;
  }
  let panjangArr = arr.length; 
  let panjangPenampung = panjangArr + 1; 
  let penampung = []; 
  for (i = 0; i < panjangPenampung; i++){ 
    penampung[i] = 0; 
  } 
  for (i = 0; i < arr.length; i++) { 
    penampung[arr[i]]++; 
  } 
  let modus = 0; 
  let k = penampung[0]; 
  for (i = 1; i < panjangPenampung; i++) { 
    if (penampung[i] > k) { 
      k = penampung[i]; 
      modus = i; 
    } 
  } 
  let bedaSemua = true;
  for (i=0; i < penampung.length; i++) {
    if (penampung[i] > 1) {
      bedaSemua = false; 
    }
  }
  return (bedaSemua) ? -1 : modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1