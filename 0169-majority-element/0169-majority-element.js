/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let majority = null;

    for (let num of nums) {
        if (count === 0) {
            majority = num;
        }
        count += (num === majority) ? 1 : -1;
    }

    return majority;
};