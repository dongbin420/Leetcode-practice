/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    const n = nums.length;
  const freq = new Map();
  let sum = 0;
  let left = 0;
  let max = 0;

  for (let right = 0; right < n; right++) {
    const rightNum = nums[right];
    sum += rightNum;
    freq.set(rightNum, (freq.get(rightNum) || 0) + 1);

    // 윈도우 크기가 k보다 클 때,
    if (right - left + 1 > k) {
      const leftNum = nums[left++];
      sum -= leftNum;
      const cnt = freq.get(leftNum) - 1;

      if (cnt === 0) freq.delete(leftNum);
      else freq.set(leftNum, cnt);
    }

    // 윈도우 크기가 k이고, 중복된 요소가 없을 때
    if (right - left + 1 === k && freq.size === k) {
      max = Math.max(max, sum);
    }
  }

  return max;
};