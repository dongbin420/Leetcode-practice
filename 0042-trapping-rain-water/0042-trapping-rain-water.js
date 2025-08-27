/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const n = height.length;
    if (n < 3) return 0;

    let left = 1, right = n - 2;
    let lMax = height[left - 1], rMax = height[right + 1];
    let water = 0;

    while (left <= right) { // height의 길이가 3일때, 중간 인덱스를 검사하기 위해 <가 아니라, <=로 검사해야 함.
        if (lMax <= rMax) {
            water += Math.max(lMax - height[left], 0);
            lMax = Math.max(lMax, height[left]);
            left++
        } else {
            water += Math.max(rMax - height[right], 0);
            rMax = Math.max(rMax, height[right]);
            right--;
        }
    }

    return water;
}


// 2차 시도(시간 초과)
// var trap = function(height) {
//     let water = 0;

//     for (let i = 1; i < height.length - 1; i++) {
//         const leftHeights = height.slice(0, i);
//         const rightHeights = height.slice(i + 1);
//         const standardHeight = Math.min(Math.max(...leftHeights), Math.max(...rightHeights));

//         if (height[i] < standardHeight) {
//             water += standardHeight - height[i];
//         }
//     }

//     return water;
// }

// 1차 시도(시간 초과)
// var trap = function(height) {
//     let water = 0;

//     for (let i = 1; i < height.length - 1; i++) {
//         let leftCurIdx = i - 1;
//         let leftHeight = 0;
//         let rightCurIdx = i + 1;
//         let rightHeight = 0;

//         while (leftCurIdx >= 0) {
//             if (height[leftCurIdx] > height[i] && height[leftCurIdx] > leftHeight) {
//                 leftHeight = height[leftCurIdx];
//             }
            
//             leftCurIdx--;
//         }

//         while (rightCurIdx <= height.length - 1) {
//             if (height[rightCurIdx] > height[i] && height[rightCurIdx] > rightHeight) {
//                 rightHeight = height[rightCurIdx];
//             }
            
//             rightCurIdx++;
//         }

//         let standardHeight = Math.min(leftHeight, rightHeight);

//         if (standardHeight > 0) {
//             water += standardHeight - height[i];
//         }
//     }

//     return water;
// };