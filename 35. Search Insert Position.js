/*
Approach: Search Insert Position (Binary Search Method)

We apply binary search to find the target efficiently. Two pointers, left and right, track the current search range. We calculate mid, compare nums[mid] with the target, and adjust the range accordingly. If the target is not found, the correct insertion position will always be at index left when the loop ends.

Time Complexity: O(log n) {binary search halves the range each iteration.}
Space Complexity: O(1) {no extra data structures used.}
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return left;
};
