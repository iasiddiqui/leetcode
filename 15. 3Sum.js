/*
Approach:

We first sort the array to make duplicate handling easier and enable a two-pointer approach. Then, we fix one element (nums[i]) and use two pointers (left and right) to find pairs that sum with nums[i] to zero. If the sum is zero, we store the triplet and skip duplicates. If the sum is less than zero, we move the left pointer forward to increase the sum; otherwise, we move the right pointer backward to decrease it. This continues for all valid i, ensuring unique triplets in the result.

Time Complexity: O(n²)
Space Complexity: O(1) (excluding output array)
*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b); // Step 1: Sort the array
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates for i

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                // Skip duplicates for left and right
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
};
