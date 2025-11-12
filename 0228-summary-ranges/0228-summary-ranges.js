/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        let start = nums[i];
        while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) i++;
        let end = nums[i];
        res.push(start === end ? `${start}` : `${start}->${end}`);
    }
    return res;
};