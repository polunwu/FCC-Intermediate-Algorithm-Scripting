function rot13(str) { // LBH QVQ VG!
  const key = 13;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let curCharCode = str.charCodeAt(i);
    if (curCharCode >= 78 && curCharCode <= 90) {
      result += String.fromCharCode(curCharCode - key);
    } else if (curCharCode >= 65 && curCharCode <= 77) {
      result += String.fromCharCode(curCharCode + key);
    } else {
      result += str[i];
    }
  }
  return result;
}

// Change the inputs below to test
rot13("LBH QVQ VG!");
