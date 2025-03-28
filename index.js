function isPalindrome(word) {
  if (word.length === 0) return false; // Handle edge case for an empty string
  
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] !== word[right]) {
      return false; // Return false as soon as a mismatch is found
    }
    left++;
    right--;
  }

  return true; // Return true if the word is a palindrome
}

/* 
  The function checks if a word reads the same forward and backward.
  It uses two pointers: one from the start and one from the end.
  If any pair of characters doesn't match, it returns false immediately.
  If all characters match, it returns true.
*/

// Test cases
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba")); // true

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar")); // true

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a")); // true (single letter is always a palindrome)

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot")); // false

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab")); // false
}

module.exports = isPalindrome;
