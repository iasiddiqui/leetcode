/*
Approach:

Create an array for each row.

Traverse s, appending each character to the correct row.

Move down until the bottom, then up to the top repeatedly.

Join all rows to form the final string.

Complexity:

Time: O(N) — each character is processed once.

Space: O(N) — for storing rows.
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    const rows = new Array(Math.min(numRows, s.length)).fill("");
    let curRow = 0, goingDown = false;

    for (let ch of s) {
        rows[curRow] += ch;
        if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
        curRow += goingDown ? 1 : -1;
    }

    return rows.join('');
};
