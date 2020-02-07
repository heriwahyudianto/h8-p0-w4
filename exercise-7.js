function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  // cari faktorialnya
  let faktor = 0;
  let arrFaktor = [];
  for (i = 1; i*i <= angka; i++) {
    if (angka % i === 0) {
      faktor = angka / i;
      arrFaktor.push(i.toString() + faktor.toString());
    }
  }
  // cari digit terpendeknya  
  let digitTerpendek = arrFaktor[0].length;
  for (i = 1; i < arrFaktor.length; i++) {
    if (digitTerpendek > arrFaktor[i].length) {
      digitTerpendek = arrFaktor[i].length;
    }
  }
  return digitTerpendek;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2