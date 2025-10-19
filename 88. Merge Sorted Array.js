/*
Approach: Two-Pointer from End

Start from the end of both arrays to avoid overwriting elements in nums1.
Compare the last valid elements of nums1 and nums2, placing the larger one at the end (k).
Continue moving backward until all elements are merged in sorted order.

Time Complexity: O(m + n) — single pass through both arrays.
Space Complexity: O(1) — in-place merge without extra memory.
*/


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
    let i = m - 1; // pointer for nums1
    let j = n - 1; // pointer for nums2
    let k = m + n - 1; // pointer for merged position

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
};
