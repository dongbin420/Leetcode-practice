/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0;
    let left = 0;
    let right = k;

    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    let maxAve = sum / k;

    while (right < nums.length) {
        sum = sum - nums[left] + nums[right];
        maxAve = Math.max(maxAve, sum / k);
        left++;
        right++; 
    }

    return maxAve;
};