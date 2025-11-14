/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let a = -Infinity, b = -Infinity, c = -Infinity;
    for (let n of nums) {
        if (n === a || n === b || n === c) continue;
        if (n > a) {
            c = b;
            b = a;
            a = n;
        } else if (n > b) {
            c = b;
            b = n;
        } else if (n > c) {
            c = n;
        }
    }
    return c === -Infinity ? a : c;
};