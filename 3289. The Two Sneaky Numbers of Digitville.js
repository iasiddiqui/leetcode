/*
Approach

We use a hash map (Map) to count occurrences of each number. While iterating through the array, we increase the count for each number. When any number’s count reaches 2, it means it appeared twice — so we add it to our result array. Finally, return the two sneaky numbers.

Time Complexity: O(n)
Space Complexity: O(n)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    const count = new Map();
    const result = [];

    for (let num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
        if (count.get(num) === 2) result.push(num);
    }

    return result;
};
