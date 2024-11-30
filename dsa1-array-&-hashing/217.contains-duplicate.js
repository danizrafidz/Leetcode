/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let tempObj = {}
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        
        if (tempObj[num] === undefined) {
            tempObj[num] = 1
        } else {
            return true
        }
    }
    return false
};
// @lc code=end

