/*

Approach: Remove Element (Two-Pointer Technique)

We use two pointers — one (i) to iterate through the array and another (k) to track the position for non-val elements. Whenever we find an element not equal to val, we place it at index k and increment k. This efficiently overwrites all unwanted elements while maintaining the required order for the remaining valid elements.

Time Complexity: O(n){ single traversal of the array.}
Space Complexity: O(1){ performed in-place with no extra memory.}
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0; // index for non-val elements

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};
