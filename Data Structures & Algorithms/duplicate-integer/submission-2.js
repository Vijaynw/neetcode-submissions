class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        console.log(nums)
        const mp = new Set(nums)

        return mp.size !== nums.length
    }
}
