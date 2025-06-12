/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     const freqOfNums = new Map();

//     for (const num of nums) {
//         freqOfNums.set(num, (freqOfNums.get(num) || 0) + 1);
//     }

//     for (const value of freqOfNums.values()) {
//         if (value >= 2) return true;
//     }

//     return false;
// };

var containsDuplicate = function(nums) {
    const setOfNums = new Set(nums);

    if (setOfNums.size === nums.length) return false;

    return true;
};