/**
 * @param {number[]} height
 * @return {number}
 */
// 3차 시도(성공)
// 풀이 설명
// 1. 왼쪽 인덱스1, 오른쪽 인덱스 n-2 부터 물이 존재가 가능하니, 이 인덱스들부터 물 양 검사 진행
// 2. 기준 인덱스 양옆의 바들의 최댓값은 인덱스0, 인덱스 n - 1부터 시작
// 3. 물의 양을 구하는 것은, 현재 위치 양옆의 왼쪽 최대 막대기, 오른쪽 최대 막대기 중에 더 작은 막대기와 현재 위치의 높이를 빼서 구할 수 있음
// 4. 양옆의 모든 막대기들을 대상으로 최대 막대기를 판별해야 할 것 같지만, 한쪽의 막대기가
// 이 구역에서 최대 막대기인게 확정되면, 반대편 막대기는 모든 막대기를 대상으로 최대를
// 판별하지 않아도, 반대편과 비교로 기준 막대기를 정할 수 있다. 왜냐하면, 반대편 막대기가
// 더 크거나 같으면 이 반대편의 나머지 막대기들을 다 체크한들 최대 막대기는 더 작아질 일이
// 없기때문이다. 이미, 현재 막대기가 크거나 같기 때문. 그리고 반대편 막대기가 작은 경우는
// 반대편 막대기가 해당 구역에서 최대인게 확정되는 것이고 반대로 원래 구역의 막대기에 대해서
// 모든 막대기를 체크할 필요가 없게 되는 것.
// 5. 추가로, 유의해야 할 점은 물리적으로 물이 존재하지 못하는 0번 인덱스와 n-1 인덱스의 위치
// 를 계산하지 않기 위해 left=1, right=n-2부터 시작했는데, 이렇게 시작하여 정상적으로 풀이를
// 하려면, left <= right로 같은 경우도 반복문의 조건으로 추가해야한다. height가 3일때 이유를
// 알 수 있다.
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