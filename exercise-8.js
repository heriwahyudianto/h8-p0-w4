function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  let arrKalimat = kalimat.split('');
  for (i = 0; i < arrKalimat.length; i++) {
    if (kalimat[i] === arrKalimat[i].toUpperCase()) {
      arrKalimat[i] = arrKalimat[i].toLowerCase();
    } else {
      arrKalimat[i] = arrKalimat[i].toUpperCase();
    }
  }
  return arrKalimat.join('');
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"