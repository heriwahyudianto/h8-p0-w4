function graduates (students) {
  // Code disini
  if (students.length === 0) {
    return {};
  }
  let kelas = [];
  let isKelasSudahAda = false;
  for (i=0; i < students.length; i++) {
    if (kelas.length === 0 ){
      kelas.push(students[i].class);
    } else {      
      isKelasSudahAda = false;
      for (j = 0; j < kelas.length; j++) {
        if (kelas[j] === students[i].class) {
          isKelasSudahAda = true;
          break;
        }
      }
      if (!isKelasSudahAda) {
        kelas.push(students[i].class);
      }
    }
  }
  let graduate = {};
  for(i = 0; i < kelas.length; i++) {
    graduate[kelas[i]] = [];
  }
  for (key in graduate) {
    for (i = 0; i < students.length; i++) {
      if (students[i].score > 75 && students[i].class === key) {
        graduate[key].push({ 
          name: students[i].name, 
          score: students[i].score 
        });
      }
    }
  }
  return graduate;
}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}