/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const n = nums.length;
    const seen = new Set();
    let duplicate = -1;
    let sum = 0;

    for (const num of nums) {
        if (seen.has(num)) {
            duplicate = num;
        } else {
            seen.add(num);
            sum += num;
        }
    }

    const expectedSum = (n * (n + 1)) / 2;
    const missing = expectedSum - sum;

    return [duplicate, missing];
};