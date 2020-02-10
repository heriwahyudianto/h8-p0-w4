function highestScore (students) {
  // Code disini
  if (students.length === 0) {
    return {};
  }
  let kelas = [];
  let isKelasSudahAda = false;
  for (i=0; i < students.length; i++) {
    if (kelas.length === 0 ){
      kelas.push([students[i].class, 0 ,'']);
    } else {      
      isKelasSudahAda = false;
      for (j = 0; j < kelas.length; j++) {
        if (kelas[j][0] === students[i].class) {
          isKelasSudahAda = true;
          break;
        }
      }
      if (!isKelasSudahAda) {
        kelas.push([students[i].class, 0, '']);
      }
    }
  }
  let nilai = [];
  for (i = 0; i < kelas.length; i++) {
    for (j = 0; j < students.length; j++) {
      if (kelas[i][0] === students[j].class && kelas[i][1] < students[j].score) {
        kelas[i][1] = students[j].score;
        kelas[i][2] = students[j].name;
      }
    }
  }
  let score = {};
  for(i = 0; i < kelas.length; i++) {
    score[kelas[i][0]] = {
       name: kelas[i][2],
       score: kelas[i][1]
    }
  }
  return score;
}

// TEST CASE
console.log(highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(highestScore([
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}
