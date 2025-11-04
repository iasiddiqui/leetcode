/*
Approach

For each sliding window of size k:

Count the frequency of each number.

Sort elements by:

Higher frequency first,

If equal, by larger value.

Pick top x elements.

Compute the sum of all numbers in the window that belong to those top x frequent elements.

Repeat for all subarrays.

⚙️ Complexity

Time: O((n - k + 1) * k log k)
(because each window sorts up to k elements)

Space: O(k) for the frequency map.
*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function(nums, k, x) {
    let n = nums.length;
    let result = [];

    for (let i = 0; i <= n - k; i++) {
        let sub = nums.slice(i, i + k);
        let freq = new Map();

        // Count frequency
        for (let num of sub) freq.set(num, (freq.get(num) || 0) + 1);

        // Sort by frequency desc, then value desc
        let sorted = [...freq.entries()].sort((a, b) => {
            if (b[1] === a[1]) return b[0] - a[0];
            return b[1] - a[1];
        });

        // Take top x frequent
        let topX = new Set(sorted.slice(0, x).map(([num]) => num));

        // Sum elements that are in top x frequent
        let sum = sub.reduce((acc, num) => acc + (topX.has(num) ? num : 0), 0);

        result.push(sum);
    }

    return result;
};
