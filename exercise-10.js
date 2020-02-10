function changeMe(arr) {
  // you can only write your code here!
  if (arr.length === 0) {
    return '""';
  }
  let siswa = [];
  for (i = 0; i < arr.length; i++){
    siswa.push({
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2],
      age: (arr[i][3] === undefined) ? 'Invalid Birth Year' : 2020 - arr[i][3]
    });
  }
  console.log(siswa);
  //return siswa;
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""