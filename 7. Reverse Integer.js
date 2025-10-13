/*
Approach: Reverse Integer (Mathematical Iteration)

We extract digits one by one from the given number using modulo (% 10) and rebuild the reversed number by multiplying the current result by 10 and adding the extracted digit. The sign is preserved separately to handle negatives. Finally, we check for 32-bit overflow — if the reversed number exceeds the valid range, we return 0.

Time Complexity: O(log₁₀ n) — proportional to the number of digits in x.
Space Complexity: O(1) — uses only a few variables for computation.
*/


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = 0;
    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);

    while (x > 0) {
        let digit = x % 10;
        rev = rev * 10 + digit;
        x = Math.floor(x / 10);
    }

    rev *= sign;

    if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) return 0;
    return rev;
};
