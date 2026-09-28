class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // const stipped = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()
        return s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase() === s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().split("").reverse().join("")
    }
}
