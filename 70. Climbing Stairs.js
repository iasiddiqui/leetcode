/*
Approach: Dynamic Programming (Fibonacci Pattern)

We treat the problem like the Fibonacci sequence, where the number of ways to reach step n equals the sum of the ways to reach steps n-1 and n-2. We start with base cases ways(1) = 1 and ways(2) = 2, then iteratively compute the result for each subsequent step using only two variables to store previous values, ensuring space efficiency.

Time Complexity: O(n) — each step is processed once.
Space Complexity: O(1) — only constant space is used.
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) return n;
    
    let first = 1, second = 2;
    for (let i = 3; i <= n; i++) {
        const third = first + second;
        first = second;
        second = third;
    }
    return second;
};
