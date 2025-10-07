/*
Approach: Sqrt(x) (Binary Search Method)

To find the square root of a non-negative integer without using built-in functions, we apply the binary search technique. We start with two pointers, left = 0 and right = x, and calculate the middle value mid in each iteration. If mid * mid equals x, we return mid; if it’s smaller, we move the left pointer up and store mid as the potential answer; otherwise, we move the right pointer down. This process continues until the pointers meet, ensuring we get the integer part of the square root efficiently.

Time Complexity: O(log x)
Space Complexity: O(1)
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x;

    let left = 1, right = x, result = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid * mid === x) return mid;
        else if (mid * mid < x) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
};
