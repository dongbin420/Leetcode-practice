/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    const cnts = [];
    let cnt = 1;
    const sortedNums = Array.from(new Set(nums)).sort((a, b) => a - b); 

    for (let i = 0; i < nums.length; i++) {
        if (i + 1 < nums.length && sortedNums[i + 1] === sortedNums[i] + 1) {
            cnt++
        } else {
            cnts.push(cnt);
            cnt = 1;
        }
    }

    return Math.max(...cnts);
};