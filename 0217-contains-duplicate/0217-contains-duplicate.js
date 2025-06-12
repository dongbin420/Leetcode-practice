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

// 이 문제에 대한 '해결법'만을 고려한다면, 이 풀이가 더 좋은 풀이. 
var containsDuplicate = function(nums) {
    const setOfNums = new Set(nums);

    if (setOfNums.size === nums.length) return false;

    return true;
};