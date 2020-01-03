function uniteUnique(...arr) {
  let result = [];
  let argArr = arr.flat();
  argArr.forEach(num => {
    if (!result.includes(num)) {
      result.push(num);
    }
  })
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);