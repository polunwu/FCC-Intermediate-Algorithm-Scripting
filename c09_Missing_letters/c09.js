function fearNotLetter(str) {
  let charCodeArr = str.split('').map(x => x.charCodeAt(0));
  let index = -1;
  let j = 0;
  for (let i = charCodeArr[0]; i < charCodeArr[charCodeArr.length - 1]; i++) {
    if (charCodeArr[j] !== i) {
      index = i;
      break;
    }
    j++;
  }
  return (index > 0) ? String.fromCharCode(index) : undefined;
}

fearNotLetter("abce");
