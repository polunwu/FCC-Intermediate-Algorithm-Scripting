function gcd(A, B) {
  if (B === 0) {
    return A;
  } else {
    return gcd(B, A % B);
  }
}

gcd(45, 10);