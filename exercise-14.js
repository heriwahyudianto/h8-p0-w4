function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  if (arrPenumpang.length === 0) {
    return [];
  }
  let penumpang = [];
  let awal =0, akhir = 0;
  for (i = 0; i < arrPenumpang.length; i++) {
    for (j = 0; j < rute.length; j++ ) {
      if (rute[j] === arrPenumpang[i][1]) {
        awal = j;
      }
      if (rute[j] === arrPenumpang[i][2]) {
        akhir = j;
        break;
      }
    }
    penumpang.push({
      penumpang: arrPenumpang[i][0],
      naikDari: arrPenumpang[i][1],
      tujuan: arrPenumpang[i][2],
      bayar: 2000 * (akhir - awal)
    })
  }
  return penumpang;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
console.log(naikAngkot([])); //[]