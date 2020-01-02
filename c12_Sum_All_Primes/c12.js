function sumPrimes(num) {
  let list = [];
  // create an array of 2 to num
  for (let i = 2; i <= num; i++) {
    list.push(i);
  }
  for (let test = 2; test <= Math.sqrt(num); test++) {
    for (let i = 0; i < list.length; i++) {
      if (list[i] % test === 0 && list[i] / test !== 1) {
        list[i] = 0;
      }
    }
  }
  return list.reduce((sum, cur) => {
    return sum + cur;
  }, 0);
}

sumPrimes(100);
