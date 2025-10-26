/*
Approach: Sliding Window + HashSet

We use two pointers (left and right) to form a sliding window and a Set to track unique characters.
If a duplicate is found, we shrink the window from the left until it's unique again.
At each step, we update maxLen with the current window size.

Time Complexity: O(n) — each character is processed at most twice.
Space Complexity: O(k) — at most k unique characters in the window.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let left = 0, maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};
