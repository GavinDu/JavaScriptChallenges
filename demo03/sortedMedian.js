function test2(arrs) {
  var arr1 = arrs[0];
  var arr2 = arrs[1];
  var newArr = [];
  var l1 = 0;
  var l2 = 0;
  while (l1 < arr1.length && l2 < arr2.length) {
    if (arr1[l1] <= arr2[l2]) {
      newArr.push(arr1[l1]);
      l1++;
    } else {
      newArr.push(arr2[l2]);
      l2++;
    }
  }

  while (l1 < arr1.length) {
    newArr.push(arr1[l1]);
    l1++;
  }

  while (l2 < arr2.length) {
    newArr.push(arr2[l2]);
    l2++;
  }
  var totalLen = (l1 +l2);
  return totalLen%2==0 ? 
    (newArr[(totalLen/2)] + newArr[(totalLen/2)-1])/2 :
    newArr[Math.floor(totalLen/2)];
}

console.log(test2([[1,8], [3,9]]));