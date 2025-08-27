/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
     let clean = s.toLowerCase().replace(/[^a-z0-9]/g, "");

     let reversed = clean.split("").reverse().join("");

      return clean === reversed;
};