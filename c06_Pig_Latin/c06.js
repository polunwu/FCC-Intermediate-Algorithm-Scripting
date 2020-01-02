function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonant = str.match(consonantRegex);
  console.log(myConsonant);
  if (myConsonant !== null) {
    return str.replace(consonantRegex, '').concat(myConsonant).concat('ay');
  } else {
    return `${str}way`
  }
}

translatePigLatin("consonant");