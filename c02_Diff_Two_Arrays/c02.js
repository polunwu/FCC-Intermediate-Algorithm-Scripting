function diffArray(arr1, arr2) {
  let newArr = [];
  // #1 concat two arrays
  // #2 filter out items that both exist in arr1 & arr2
  newArr = [...arr1].concat(...arr2).filter(item => (arr1.includes(item) && arr2.includes(item)) ? false : true);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);