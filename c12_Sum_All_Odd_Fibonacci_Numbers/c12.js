function sumFibs(maxNum) {
  let preNum = 0;
  let curNum = 1;
  let fibsArr = []; // Store all Fibonacci numbers
  let result = 0; // Sore odd Fibonacci numbers

  while (curNum <= maxNum) {
    fibsArr.push(curNum); // push curNum into array after comparing with num
    if (curNum % 2 === 1) {
      result += curNum; // adding odd Fibonacci numbers to result
    }

    let tempCur = curNum;
    curNum += preNum;
    preNum = tempCur;
  }
  console.log(fibsArr);
  console.log(result);
  return result;
}

sumFibs(1);
sumFibs(1000);
sumFibs(4000000);
sumFibs(4);
sumFibs(75024);
sumFibs(75025);

