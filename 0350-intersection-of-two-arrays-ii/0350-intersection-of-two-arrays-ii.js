/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = {};
    let res = [];
    for (let n of nums1) {
        map[n] = (map[n] || 0) + 1;
    }
    for (let n of nums2) {
        if (map[n] > 0) {
            res.push(n);
            map[n]--;
        }
    }
    return res;
};