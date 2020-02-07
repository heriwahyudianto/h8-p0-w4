function ubahHuruf(kata) {
  // you can only write your code here!
  arrKata = kata.split('');
  for (i = 0; i < arrKata.length; i++) {    
    switch (kata[i]) {
      case 'a' : arrKata[i] = 'b'; break;
      case 'b' : arrKata[i] = 'c'; break;
      case 'c' : arrKata[i] = 'd'; break;
      case 'd' : arrKata[i] = 'e'; break;
      case 'e' : arrKata[i] = 'f'; break;
      case 'f' : arrKata[i] = 'g'; break;
      case 'g' : arrKata[i] = 'h'; break;
      case 'h' : arrKata[i] = 'i'; break;
      case 'i' : arrKata[i] = 'j'; break;
      case 'j' : arrKata[i] = 'k'; break;
      case 'k' : arrKata[i] = 'l'; break;
      case 'l' : arrKata[i] = 'm'; break;
      case 'm' : arrKata[i] = 'n'; break;
      case 'n' : arrKata[i] = 'o'; break;
      case 'o' : arrKata[i] = 'p'; break;
      case 'p' : arrKata[i] = 'q'; break;
      case 'q' : arrKata[i] = 'r'; break;
      case 'r' : arrKata[i] = 's'; break;
      case 's' : arrKata[i] = 't'; break;
      case 't' : arrKata[i] = 'u'; break;
      case 'u' : arrKata[i] = 'v'; break;
      case 'v' : arrKata[i] = 'w'; break;
      case 'w' : arrKata[i] = 'x'; break;
      case 'x' : arrKata[i] = 'y'; break;
      case 'y' : arrKata[i] = 'z'; break;
      case 'z' : arrKata[i] = 'a'; break;
    }
  }
  return arrKata.join('');
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu