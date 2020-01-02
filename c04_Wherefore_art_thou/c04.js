function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  arr = collection.filter(item => {
    let isInclude = false;
    for (let key in source) {
      isInclude = item.hasOwnProperty(key) ? true : false;
    }
    return isInclude;
  }).filter(item => {
    let checker = false
    for (let key in source) {
      if (item[key] === source[key]) { checker = true; }
      else { return false; }
    }
    return checker;
  });

  // Only change code above this line
  console.log(arr);
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });