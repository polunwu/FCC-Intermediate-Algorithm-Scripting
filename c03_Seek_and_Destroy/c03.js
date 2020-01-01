/* ES6 */
function destroyer(arr, ...removeList) {
  let newArr = arr.filter(item => !removeList.includes(item));
  return newArr;
}

/* Another way */
/* function destroyer(arr) {
  // conver 'arguments' into removeList array start from index 1
  const removeList = Array.from(arguments).slice(1);
  let newArr = arr.filter(item => !removeList.includes(item));
  return newArr;
} */

destroyer([1, 2, 3, 1, 2, 3], 2, 3);