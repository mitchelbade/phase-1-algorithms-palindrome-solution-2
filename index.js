function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; i < word.length / 2; i++) {
    const j = word.length - 1 - i;
    const startChar = word[i];
    const endChar = word[j];

    if (startChar !== endChar) return false;
  }

  return true;
}

/* 
  Add your pseudocode here
  iterate from beginning to middle of word
  checking each character from the corresponding letter from either end
  if any letters do not match
  return false
  else if all letters do match
  return true
*/

/*
  Add written explanation of your solution here
  making a function that takes in a word and returns true if it is a palindrome
  example of palindrome = mom, dad, racecar, madam, appa
  new approach
  abba
  ^  ^
  true
  robust
   ^  ^
  false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
