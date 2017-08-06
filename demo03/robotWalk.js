function test(path) {
  path = path.toUpperCase();
  var res = [0,0];
  for (var c of path) {
    if (c === 'U' || c === 'u' ) res[1]++;
    if (c === 'D' || c === 'd' ) res[1]--;
    if (c === 'L' || c === 'l' ) res[0]--;
    if (c === 'R' || c === 'r' ) res[0]++;
  }
  return res;
}

console.log(test("ULLLDUDUURLRLR"))