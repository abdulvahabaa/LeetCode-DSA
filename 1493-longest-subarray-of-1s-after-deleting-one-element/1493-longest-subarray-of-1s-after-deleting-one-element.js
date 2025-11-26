/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let left = 0, zeros = 0, maxLen = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) zeros++;
        while (zeros > 1) {
            if (nums[left] === 0) zeros--;
            left++;
        }
        maxLen = Math.max(maxLen, right - left);
    }

    return maxLen;
};