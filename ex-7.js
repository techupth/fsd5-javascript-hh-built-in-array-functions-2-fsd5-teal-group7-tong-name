function isPalindrome(string) {
  // Start coding here
  string=string.toLowerCase().replace(/[w_]/g,"")
  let reversedString=string.split('').reverse().join('')
  return string===reversedString
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("noon")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
