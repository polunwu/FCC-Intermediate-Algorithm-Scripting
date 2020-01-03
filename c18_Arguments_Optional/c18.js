function addTogether(a, b) {
  if (isNum(arguments) && arguments.length === 1) {
    return function (c) {
      return isNum(arguments) ? c + a : undefined;
    }
  } else if (isNum(arguments) && arguments.length === 2) {
    return a + b;
  } else {
    return undefined;
  }

  function isNum(args) {
    return Array.from(args).every(arg => typeof arg === "number")
  }
}

addTogether(2)([3]);
