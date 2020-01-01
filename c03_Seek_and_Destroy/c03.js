function destroyer(arr) {
  // get an array of remove target from 'arguments'
  const removeList = Object.values(arguments).slice(1);
  let newArr = arr.filter(item => !removeList.includes(item));
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);