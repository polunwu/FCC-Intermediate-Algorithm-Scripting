function myReplace(str, before, after) {
  // Check first chart at before is Uppercase
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase().concat(after.replace(/^./, ""));
  }
  let boforeRegex = new RegExp(before, 'i');
  let result = str.replace(boforeRegex, after);
  return result;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");