function convertToRoman(num) {
  const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let result = "";
  for (let i = 0; i < decimal.length; i++) {
    while (num >= decimal[i]) {
      result += roman[i];
      num = num - decimal[i];
    }
  }
  return result;
}

convertToRoman(36);
