/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length - 1;

    while (true) {
        if (numbers[left] + numbers[right] > target) {
            right--;
        } else if (numbers[left] + numbers[right] < target) {
            left++;
        } else {
            return [left + 1, right + 1];
        }
    }
};

// 이 방식은 처음 푼 방식인데, 사실상 투포인트 처럼 푸는거 같아 보이지만 실상은, 이중 for문을 투포인터처럼 구현한 것일 뿐이고, 제대로 구현하지 못한 코드라고 볼 수 있다.(O(N^2))
// var twoSum = function(numbers, target) {
//     let left = 0, right = 1;

//     while (left < right) {
//         if (numbers[left] + numbers[right] === target) {
//             return [left + 1, right + 1];
//         }

//         if (right === numbers.length - 1) {
//             left++;
//             right = left + 1;
//         } else {
//             right++;
//         }
//     }
// };