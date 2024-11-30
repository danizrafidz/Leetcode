/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let checkNum = nums[i];
        
        for (let j = i + 1; j < nums.length; j++) {
            let perNum = nums[j];
            
            if (checkNum + perNum === target) {
                return [i, j]
            }
        }
    }
};
// @lc code=end

