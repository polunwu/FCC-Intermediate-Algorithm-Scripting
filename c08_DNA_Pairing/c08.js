function pairElement(str) {
  let newArr = [];
  let createPair = function (char) {
    switch (char) {
      case "A":
        return ["A", "T"];
      case "T":
        return ["T", "A"];
      case "C":
        return ["C", "G"];
      case "G":
        return ["G", "C"];
    }
  }
  for (let i = 0; i < str.length; i++) {
    newArr.push(createPair(str[i]));
  }
  return newArr;
}

pairElement("GCG");
