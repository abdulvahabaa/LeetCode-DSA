/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let map = new Map();
    let operations = 0;

    for (let num of nums) {
        let target = k - num;

        if (map.get(target) > 0) {
            operations++;
            map.set(target, map.get(target) - 1);
        } else {
            map.set(num, (map.get(num) || 0) + 1);
        }
    }

    return operations;
};