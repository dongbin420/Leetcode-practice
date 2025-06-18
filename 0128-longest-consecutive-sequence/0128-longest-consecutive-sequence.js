/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    
    const numSet = new Set(nums);
    const cnts = [];

    for (const num of numSet.values()) {
        if (!numSet.has(num - 1)) {
            let cnt = 1;
            let i = 1;

            while (numSet.has(num + i)) {
                cnt++;
                i++;
            }

            cnts.push(cnt);
        } else {
            continue;
        }
    }

    return Math.max(...cnts);
}

// nlog n 해결 방식(sort 메서드가 nlog n이므로)
// var longestConsecutive = function(nums) {
//     if (nums.length === 0) {
//         return 0;
//     }

//     const cnts = [];
//     let cnt = 1;
//     const sortedNums = Array.from(new Set(nums)).sort((a, b) => a - b); 

//     for (let i = 0; i < nums.length; i++) {
//         if (i + 1 < nums.length && sortedNums[i + 1] === sortedNums[i] + 1) {
//             cnt++
//         } else {
//             cnts.push(cnt);
//             cnt = 1;
//         }
//     }

//     return Math.max(...cnts);
// };