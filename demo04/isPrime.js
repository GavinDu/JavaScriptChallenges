console.log(find(10));
function find(n) {
  for (var i=n; i >= 1; i--) {
    if (n%i == 0 && isPrime(i)) return i;
  }
  return 1;
}
  
function isPrime(n) {
  if (n<1) return false;
  for (var i=2; i<=Math.sqrt(n); i++) {
    if (n%i === 0) return false;
  }
  return true;
}


function hasCommon(a, b) {
  var set = new Set(a);
  for (var c of b) {
    if (set.has(c)) return true;
  }
  return false;
}


	function sum(n) {
		if (n < 3) return 0;
		var res = 0;
		for (var i=3; i<n; i++) {
			if (i%3==0 || i%5==0) {
				res += i;
			}
		}
		return res;
	}