/*
Approach: Using Built-in String Search (indexOf Method)

We can directly use JavaScript’s indexOf() function, which efficiently finds the first occurrence of a substring (needle) within a given string (haystack). It returns the index of the first match or -1 if the substring is not found. This built-in method is already optimized for substring search operations.

Time Complexity: O(n * m) — worst-case scenario where n is the length of haystack and m is the length of needle.
Space Complexity: O(1) — no additional memory used beyond a few variables.
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
    
};
