/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let maxAlt = 0;
    let current = 0;
    for (let g of gain) {
        current += g;
        maxAlt = Math.max(maxAlt, current);
    }
    return maxAlt;
};