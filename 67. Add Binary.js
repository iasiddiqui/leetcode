/*
Binary Addition Simulation

We start from the end of both binary strings and add digits one by one, just like manual binary addition. Each step adds the corresponding bits and the carry. The current bit is obtained using sum % 2, and the carry is updated as Math.floor(sum / 2). We continue until both strings and the carry are processed. The result is built in reverse and then reversed back for the final binary sum.

Time Complexity: O(max(n, m)) — each bit of both strings is processed once.
Space Complexity: O(max(n, m)) — for storing the result string.
*/


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1, j = b.length - 1, carry = 0;
    let result = "";

    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;
        if (i >= 0) sum += a[i--] - '0';
        if (j >= 0) sum += b[j--] - '0';
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }

    return result;
};
