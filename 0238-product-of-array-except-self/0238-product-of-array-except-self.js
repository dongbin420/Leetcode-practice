/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const answer = Array(nums.length).fill(1);
    let prefixProd = 1;
    let suffixProd = 1;

    for (let i = 0; i < nums.length; i++) {
        answer[i] *= prefixProd;
        prefixProd *= nums[i];
    }

    for (let j = nums.length - 1; j >= 0; j--) {
        answer[j] *= suffixProd;
        suffixProd *= nums[j];
    }

    return answer;
}


// 처음 푼 방식(나눗셈 활용)
// var productExceptSelf = function(nums) {
//     const answer = [];
//     const allProduct = nums.reduce((acc, cur) => acc * cur, 1);

//     if (allProduct === 0) {
//         for (let i = 0; i < nums.length; i++) {
//             if (nums[i] === 0) {
//                 answer[i] = nums.reduce((acc, cur, idx) => {
//                     if (idx === i) return acc;
                    
//                     return acc * cur;
//                 }, 1);
//             } else {
//                 answer[i] = allProduct;
//             }
//         }
//     } else {
//         for (let j = 0; j < nums.length; j++) {
//             answer[j] = allProduct / nums[j];
//         }
//     }

//     return answer;
// };