function dropElements(arr, func) {
  // Drop them elements.
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      index = i;
      break;
    }
  }
  return (index < 0) ? [] : arr.slice(index);
}

dropElements([1, 2, 3], function (n) { return n < 3; });