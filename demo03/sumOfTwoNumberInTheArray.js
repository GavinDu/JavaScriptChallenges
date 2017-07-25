/**
 * e.g [1,2,3] => true, because 1+2=3
 *     [4,2,9] => false, because not existing sum of two number in the array.
 */
function sumOfTwoInTheArray(arr) {
  var len = arr.length;
  var set = new Set(arr);
  for (var i=0; i<len; i++) {
    for (var j=i+1; j<len; j++) {
      if (set.has(arr[i] + arr[j])) {
        return true;
      }
    }
  }
  
  return false;
}


console.log(solution1([2,3,4]));