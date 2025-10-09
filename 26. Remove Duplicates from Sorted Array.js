/*
Approach: Remove Duplicates from Sorted Array (Two-Pointer Technique)

We use two pointers — one (i) to track the position of the last unique element and another (j) to iterate through the array. Whenever a new unique element is found, it’s placed next to the previous unique element, effectively overwriting duplicates in place. This ensures all unique elements are grouped at the start of the array while maintaining order.

Time Complexity: O(n): traverses the array once.
Space Complexity: O(1): uses constant extra space.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};
