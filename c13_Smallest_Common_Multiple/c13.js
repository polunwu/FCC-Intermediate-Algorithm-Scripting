function smallestCommons(arr) {
  let numList = [];
  for (let i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    numList.push(i);
  }
  let LCM = numList[0];
  for (let i = 1; i < numList.length; i++) {
    LCM = lcm(LCM, numList[i]);
  }

  // greatest common divisor - use Euclidean algorithm
  function gcd(A, B) {
    if (B === 0) {
      return A;
    } else {
      return gcd(B, A % B);
    }
  }

  // least common multiple
  function lcm(A, B) {
    return A * B / gcd(A, B);
  }

  console.log(LCM);
  return LCM;
}


smallestCommons([1, 5]);