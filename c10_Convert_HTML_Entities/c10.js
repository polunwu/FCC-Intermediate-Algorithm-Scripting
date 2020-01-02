function convertHTML(str) {
  // &colon;&rpar;
  const htmlEntities = [
    { char: "&", entity: "&amp;" },
    { char: "<", entity: "&lt;" },
    { char: ">", entity: "&gt;" },
    { char: "\"", entity: "&quot;" },
    { char: "'", entity: "&apos;" }
  ];
  htmlEntities.forEach(valPair => {
    str = str.replace(new RegExp(valPair.char, "g"), valPair.entity);
  });
  return str;
}

convertHTML("Dolce & Gabbana");
