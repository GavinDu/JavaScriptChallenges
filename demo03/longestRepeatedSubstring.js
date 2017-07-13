function longestSubstring(string) {
  if (string == null || string.length < 1) {
    return [-1, 0];
  }

  var chr = string[0];
  var longestLength = 1;
  var curLength = 1;
  var curPos = 0;

  for (var i = 1; i < string.length; i++) {
    if (chr != string[i]) {
      if (curLength > longestLength) {
        longestLength = curLength;
        console.log(i);
        console.log(curLength);
        curPos = i - curLength;
      }
      chr = string[i];
      curLength = 1;
    } else {
      curLength++;
    }
  }

  if (curLength > longestLength) {
    longestLength = curLength;
    curPos = i - curLength;
  }
  return [curPos, longestLength];
}
