/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = -Infinity;
    let shortLine;

    while (left < right) {
        shortLine = Math.min(height[left], height[right])
        maxWater = Math.max(maxWater, (right - left) * shortLine);
        console.log(maxWater);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        } 
    }

    return maxWater;
};