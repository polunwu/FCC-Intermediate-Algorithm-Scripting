function sumAll(arr) {
  let sortArr = arr.sort((a, b) => a < b ? 1 : -1);
  return factorial(...sortArr);
}

function factorial(max, min) {
  if (max === min) {
    return min;
  } else {
    return max + factorial(max - 1, min);
  }
}

sumAll([1, 4]);