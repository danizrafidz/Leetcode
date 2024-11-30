/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let result = []

    let tempObj = {}
    for (let i = 0; i < nums.length; i++) {
        if (tempObj[nums[i]] === undefined) {
            tempObj[nums[i]] = 1
        } else {
            tempObj[nums[i]]++
        }
    }

    for (let h = 0; h < k; h++) {
        let maxNum = 0
        let maxCount = -Infinity
        for (let j = 0; j < Object.keys(tempObj).length; j++) {
            let checkNum = Object.keys(tempObj)[j] // 1
            let checkCount = Object.values(tempObj)[j] // 4

            if (maxCount < checkCount) {
                maxNum = checkNum
                maxCount = checkCount
            }
        }
        result.push(Number(maxNum))
        delete tempObj[maxNum]
    }
    return result
};
// [1, 3, 4]
// @lc code=end

