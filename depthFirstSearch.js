/**
 * @param {string[][]} grid - The 2D grid of characters.
 * @param {number} row - The current row index.
 * @param {number} column - The current column index.
 */
function dfs(grid, row, column) {
    const rows = grid.length;
    const cols = grid[0].length;

    if (row < 0 || row >= rows || column < 0 || column >= cols || grid[row][column] === '0') {
        return;
    }

    grid[row][column] = '0';

    dfs(grid, row + 1, column); // Down
    dfs(grid, row - 1, column); // Up
    dfs(grid, row, column + 1); // Right
    dfs(grid, row, column - 1); // Left
}
