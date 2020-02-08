function ubahHuruf(kata) {
  // you can only write your code here!
  let hash = '';
  const KAMUS = 'abcdefghijklmnopqrstuvwxyza';
  for (j = 0; j < kata.length; j++) {
    for (i = 0; i < KAMUS.length; i++) {
      if (kata[j] === KAMUS[i]) {
        hash += KAMUS[i + 1]; 
        break;
      }
    }
  }      
  return hash;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu