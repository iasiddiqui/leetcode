/*
Approach

Predefine mappings: Store all key Roman numeral values (1000, 900, 500, etc.) with their symbols.

Greedy subtraction: From largest to smallest:

Append the Roman symbol as long as num >= value.

Subtract that value from num.

Stop when num = 0.

⏱ Complexity

Time Complexity: O(1) → Max 13 values; loop is constant.

Space Complexity: O(1) → Constant extra space.

Example

num = 1994

1000 → M → num = 994

900 → CM → num = 94

90 → XC → num = 4

4 → IV
✅ Output → "MCMXCIV"
*/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let result = "";

    for (let i = 0; i < values.length && num > 0; i++) {
        while (num >= values[i]) {
            result += symbols[i];
            num -= values[i];
        }
    }
    return result;
};
3
