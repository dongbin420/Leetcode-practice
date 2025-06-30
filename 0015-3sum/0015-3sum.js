/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  const sortedNums = nums.sort((a, b) => a - b);
  const answer = [];

  for (let i = 0; i < sortedNums.length - 2; i++) {
    // i 이전 인덱스가 현재 인덱스 값과 같은 경우, 이미 프로세스를 다 거친 상태이므로, 굳이 판단할 필요 없이 다음 인덱스로 넘어가도 되는 것.
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;
    let second = i + 1;
    let third = sortedNums.length - 1;
    
    while (second < third) {
      const sum = sortedNums[i] + sortedNums[second] + sortedNums[third];
      
      if (sum === 0) {
        answer.push([sortedNums[i], sortedNums[second], sortedNums[third]]);

        // second과 third 둘 다에 대해 다음 인덱스와 같은지 판별하는 게 조금 의아할 수 있겠지만(특정 경우를 스킵할 것 같다는 걱정), second가 다음 인덱스의 값과 같지 않은 인덱스로 넘어가게 되면, 무조건 0보다 커진다. 따라서 third 검사를 통해 0이 될 수 있게끔 바로 검사를 하는 거다. 
        // sum이 0인 경우에만 인덱스 값 중복 여부를 확인하는 이유는, 중복 검사를 하지 않고 넘어간다면, 다음 반복문 순차에서 똑같은 값이 0을 형성해 같은 값이 answer에 들어가 오류를 초래할 수 있기 때문이다.
        // sum < 0일 때, 혹은 sum > 0일 때는, 값이 같은 경우 어차피 다음 반복문 순차에서 똑같은 sum < 0 혹은 sum > 0에 걸려 다음 인덱스로 넘어가 문제가 없다.
        while (sortedNums[second] === sortedNums[second + 1]) second++;
        while (sortedNums[third] === sortedNums[third - 1]) third++;
        
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

// var threeSum = function(nums) {
//     const answer = [];
//     const sortedNums = nums.sort((a, b) => a - b);

//     for (let i = 0; i < sortedNums.length - 2; i++) {
//         if (sortedNums[i] > 0) break;
//         if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;
//         let second = i + 1, third = sortedNums.length - 1;

//         while (second < third) {
//             const sum = sortedNums[i] + sortedNums[second] + sortedNums[third];
            
//             if (sum === 0) {
//                 answer.push([sortedNums[i], sortedNums[second], sortedNums[third]]);
                
//                 while (second < third && sortedNums[second] === sortedNums[second + 1]) second++;
//                 while (second < third && sortedNums[third] === sortedNums[third - 1]) third--;

//                 second++;
//                 third--;
//             } else if (sum < 0) {
//                 second++;
//             } else if (sum > 0) {
//                 third--;
//             }
//         }
//     }

//     return answer;
// }


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