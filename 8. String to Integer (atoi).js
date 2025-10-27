/*
Approach: Step-by-Step String Parsing

Trim spaces: Use trim() to skip leading whitespace.

Check sign: Detect if the number is positive or negative.

Read digits: Convert valid characters into a number until a non-digit is found.

Handle overflow: Clamp results to 32-bit signed integer range ([-2³¹, 2³¹-1]).

Return the final value.

Time Complexity: O(n) — single traversal of the string.
Space Complexity: O(1) — constant extra space.
*/

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim(); // Step 1: remove leading spaces
    if (s.length === 0) return 0;

    let sign = 1, i = 0, result = 0;
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    // Step 2: handle sign
    if (s[i] === '+' || s[i] === '-') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // Step 3: convert digits
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i].charCodeAt(0) - 48);

        // Step 4: handle overflow
        if (result * sign >= INT_MAX) return INT_MAX;
        if (result * sign <= INT_MIN) return INT_MIN;

        i++;
    }

    return result * sign;
};
