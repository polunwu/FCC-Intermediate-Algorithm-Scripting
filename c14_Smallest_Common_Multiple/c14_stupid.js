function smallestCommons(arr) {
  let numList = [];
  for (let i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    numList.push(i);
  }

  let LCM = 0; // least common multiple
  let stopper = -1;
  let i = 1;
  while (stopper < 0) {
    let checker = 0;
    LCM = numList[0] * numList[1] * i;
    for (let j = 2; j < numList.length; j++) {
      if (LCM % numList[j] === 0) {
        checker++;
      }
    }
    if (checker >= numList.length - 2) {
      stopper = 1;
    }
    i++;
  }
  console.log(numList);
  console.log(i - 1, LCM);
  return LCM;
}


smallestCommons([1, 5]);