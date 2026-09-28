class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const mp = new Map()
        for(const n of nums) {
            if(!mp.has(n)){
                mp.set(n,[])
            }
            mp.get(n).push(n)
        }
        const data = []
        const res = [...mp.values()].map((el)=>{
            data.push(el)
        })
        return data.sort((a,b)=> b.length - a.length).slice(0,k).map(el=> el[0])
    }
}

