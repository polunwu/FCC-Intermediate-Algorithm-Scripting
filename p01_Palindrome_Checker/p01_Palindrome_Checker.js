function palindrome(str) {
  // Good luck!
  str = str.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
  let reversed = str.split('').reverse().join("");
  return (str === reversed);
}



palindrome("eye");
palindrome("_eye");
palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym.");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("five|\_/|four");
