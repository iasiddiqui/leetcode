/*
Approach (Stack):
We use a stack to validate the parentheses sequence. As we iterate through the string, we push every opening bracket ((, {, [) onto the stack. When a closing bracket (), }, ]) appears, we check if it matches the top element of the stack. If it matches, we pop it; otherwise, the string is invalid. After processing all characters, if the stack is empty, it means every opening bracket has been properly closed, making the string valid. This approach efficiently checks validity in O(n) time and O(n) space.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let map = { ')': '(', '}': '{', ']': '[' };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.pop() !== map[char]) return false;
        }
    }

    return stack.length === 0;
};
