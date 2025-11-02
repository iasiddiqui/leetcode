/*

Approach:

We use simulation with directional sweeps to mark guarded cells.

Initialize a 2D grid of size m × n and mark all guard and wall positions distinctly.

For each guard, explore in all four directions (up, down, left, right) until we hit a wall or another guard.

Mark all traversed empty cells as guarded.

Finally, iterate through the grid to count how many cells remain unoccupied and unguarded.
This ensures we only simulate visibility efficiently using directional expansion from each guard.

Complexity:

Time Complexity: O(m * n) → each cell is visited at most a few times (once per direction).

Space Complexity: O(m * n) → for storing grid states (guard, wall, guarded, or empty).
*/

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function(m, n, guards, walls) {
    // 0 = empty, 1 = wall, 2 = guard, 3 = guarded
    const grid = Array.from({ length: m }, () => Array(n).fill(0));

    // Mark walls and guards
    for (const [r, c] of walls) grid[r][c] = 1;
    for (const [r, c] of guards) grid[r][c] = 2;

    // Directions: up, down, left, right
    const dirs = [[-1,0],[1,0],[0,-1],[0,1]];

    // For each guard, mark visible cells
    for (const [r, c] of guards) {
        for (const [dr, dc] of dirs) {
            let nr = r + dr, nc = c + dc;
            while (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] !== 1 && grid[nr][nc] !== 2) {
                if (grid[nr][nc] === 0) grid[nr][nc] = 3; // mark as guarded
                nr += dr;
                nc += dc;
            }
        }
    }

    // Count unguarded (unoccupied and not guarded)
    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) count++;
        }
    }

    return count;
};
