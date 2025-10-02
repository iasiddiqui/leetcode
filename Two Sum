/*
This solution to the Two Sum problem uses a single-pass hash map (Map) to find two indices whose values sum to the target in O(n) time. As we iterate through the array, we compute the complement (target - nums[i]) and check if it already exists in the map. If it does, we return the pair of indices; otherwise, we store the current number and its index. Using a Map ensures numeric keys remain accurate and avoids overwriting issues that occur with plain objects. This approach is efficient and works for all valid inputs guaranteed to have exactly one solution.
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map(); 

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }
};
