/**
 * @param {number[]} nums
 * @return {number}
 */
// 복습, 구문 개선 방식
var longestConsecutive = (nums) => {
  if (nums.length === 0) return 0;

  const numSet = new Set(nums);
  const lengs = [];

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let i = 1;
      
      while (numSet.has(num + i)) {
        i++;
      }

      lengs.push(i);
    }
  }

  return Math.max(...lengs);
}

// O(N)으로 처음 푼 방식
// var longestConsecutive = function(nums) {
//     if (nums.length === 0) return 0;

//     const numSet = new Set(nums);
//     const cnts = [];

//     for (const num of numSet) {
//         if (!numSet.has(num - 1)) {
//             let cnt = 1;
//             let i = 1;

//             while (numSet.has(num + i)) {
//                 cnt++;
//                 i++;
//             }

//             cnts.push(cnt);
//         } else {
//             continue;
//         }
//     }

//     return Math.max(...cnts);
// }

// nlog n 해결 방식(sort 메서드가 nlog n이므로, 최적화 적용 안된 버전)
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