function convertHTML(str) {
  // &colon;&rpar;
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  }
  let result = str
    .split('')
    .map(char => htmlEntities[char] ? htmlEntities[char] : char)
    .join('');

  return result;
}

convertHTML("Dolce & Gabbana");
