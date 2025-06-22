/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const answer = [];
    const sortedNums = nums.sort((a, b) => a - b);

    for (let i = 0; i < sortedNums.length - 2; i++) {
        if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;
        let second = i + 1, third = sortedNums.length - 1;

        while (second < third) {
            const sum = sortedNums[i] + sortedNums[second] + sortedNums[third];
            
            if (sum === 0) {
                answer.push([sortedNums[i], sortedNums[second], sortedNums[third]]);
                
                while (second < third && sortedNums[second] === sortedNums[second + 1]) second++;
                while (second < third && sortedNums[third] === sortedNums[third - 1]) third--;

                second++;
                third--;
            } else if (sum < 0) {
                second++;
            } else if (sum > 0) {
                third--;
            }
        }
    }

    return answer;
}


// 처음 푼 틀린 방식
// var threeSum = function(nums) {
//     const answer = [];
//     const sortedNums = nums.sort((a, b) => a - b);
//     let first = 0, second = 1, third = 2;

//     while (first < second && second < third && third < nums.length) {
//         const sum = sortedNums[first] + sortedNums[second] + sortedNums[third];

//         if (sum === 0) {
//             answer.push([sortedNums[first], sortedNums[second], sortedNums[third]]);

//             if (third !== nums.length - 1) {
//                 third++;
//             } else if (second !== third - 1) {
//                 second++;
//             } else {
//                 first++;
//             }
//         } else if (sum < 0) {
//             if (third !== nums.length - 1) {
//                 third++;
//             } else if (second !== third - 1) {
//                 second++;
//             } else {
//                 first++;
//             }
//         } 
//     }

//     return answer;
// };