/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    const prefix = [];

    for (let i = left; i <= right; i++) {
        if (i === left) {
            prefix[i] = this.nums[i];
        } else {
            prefix[i] = prefix[i - 1] + this.nums[i];
        }
    }

    return prefix[right];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */