/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let n = grid.length;
    let map = new Map();
    let count = 0;

    for (let r = 0; r < n; r++) {
        let key = grid[r].join(",");
        map.set(key, (map.get(key) || 0) + 1);
    }

    for (let c = 0; c < n; c++) {
        let col = [];
        for (let r = 0; r < n; r++) col.push(grid[r][c]);
        let key = col.join(",");
        if (map.has(key)) count += map.get(key);
    }

    return count;
};