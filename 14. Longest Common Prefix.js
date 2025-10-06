/*
Approach: Longest Common Prefix (Horizontal Scanning Method)

We begin by taking the first string as the initial prefix. Then, we iterate through each subsequent string and shorten the prefix until it matches the start of that string. This process continues until all strings have been compared or the prefix becomes empty. This method efficiently checks for the common prefix by scanning characters horizontally across all strings rather than comparing every pair of characters individually.

Time Complexity: O(S) - where S is the total number of characters across all strings.
Space Complexity: O(1) - uses only a constant amount of extra space.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    if(!strs.length) return "";

    let prefix = strs[0]

    for(let i =1; i<strs.length; i++){
        while(strs[i].indexOf(prefix) !== 0){
            prefix = prefix.slice(0,-1)
            if(prefix === "") return "";
        }
    }
    return prefix
};
