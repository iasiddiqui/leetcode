/*
Approach: Split and Trim Method

We first remove any trailing spaces using trim(), ensuring the string ends with a valid word. Then, we split the string by spaces to separate words and return the length of the last element. This provides a clean and straightforward way to determine the length of the final word in the sentence.

Time Complexity: O(n) — traverses the string once for trimming and splitting.
Space Complexity: O(n) — due to the array created by split().
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim(); // remove trailing and leading spaces
    let words = s.split(" ");
    return words[words.length - 1].length;
};
