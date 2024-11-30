/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let tempObj = {}

    if (s.length !== t.length) {
        return false
    }
    
    for (let i = 0; i < s.length; i++) {
        tempObj[s[i]] = ''
    }

    for (let checkChar of Object.keys(tempObj)) { // (a)
        let sCount = 0
        let tCount = 0
        for (let j = 0; j < s.length; j++) {
            let sChar = s[j]; // a
            let tChar = t[j]; // n

            if (checkChar === sChar) {
                sCount++
            }
            if (checkChar === tChar) {
                tCount++
            }
        }
        if (sCount !== tCount) {
            return false
        }
    }
    return true
};

// @lc code=end

