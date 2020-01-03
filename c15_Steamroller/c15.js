function steamrollArray(arr) {
  // I'm a steamroller, baby
  function throughFirstLayer(arr) {
    if (arr.length) {
      arr.forEach(item => {
        if (Array.isArray(item)) {
          throughFirstLayer(item);
        } else {
          result.push(item);
        }
      });
    }
  }

  let result = [];
  throughFirstLayer(arr);
  return result;
}

steamrollArray([1, {}, [3, [[4]]]]);