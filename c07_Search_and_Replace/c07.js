function myReplace(str, before, after) {
  // Check first chart at before is Uppercase
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.slice(1);
  }
  let result = str.replace(before, after);
  return result;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");