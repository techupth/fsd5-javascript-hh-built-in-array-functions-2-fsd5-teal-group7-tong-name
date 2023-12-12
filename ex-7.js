function isPalindrome(string) {
  const sanitizedString = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const reversedString = sanitizedString.split("").reverse().join("");
  return sanitizedString === reversedString;
}

console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("noon")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
