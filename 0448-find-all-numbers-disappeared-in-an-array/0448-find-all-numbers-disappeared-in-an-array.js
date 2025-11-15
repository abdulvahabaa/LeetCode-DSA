/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        const idx = Math.abs(nums[i]) - 1;
        if (nums[idx] > 0) nums[idx] = -nums[idx];
    }
    
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) result.push(i + 1);
    }
    
    return result;
};