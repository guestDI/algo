Given an integer x, return true if x is a palindrome, and false otherwise.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const xString = x.toString();
  const len = Math.floor(xString.length / 2);
  for (var i = 0; i < len; i++) {
    if (xString[i] !== xString[xString.length - i - 1]){
      return false;
    }
  }
        
  return true;
};
