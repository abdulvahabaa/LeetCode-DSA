/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let p = 0;
    const r = grid.length, c = grid[0].length;
    
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (grid[i][j] === 1) {
                p += 4;
                if (i > 0 && grid[i - 1][j] === 1) p -= 2;
                if (j > 0 && grid[i][j - 1] === 1) p -= 2;
            }
        }
    }
    
    return p;
};