function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str.trim().replace(/([a-z])(_)*([A-Z])/g, `$1 $3`).replace(/\s/g, '-').toLowerCase();
}

spinalCase('This Is Spinal Tap');