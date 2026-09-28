class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const mp = new Map()
        console.log(mp)
        for(const n of nums) {
            const key = n

            if(!mp.has(n)){
                mp.set(n,[])
            }
            mp.get(n).push(n)
        }
        const data = []
        const res = [...mp.values()].map((el)=>{
            data.push(el)
        })
        const res1= data.sort((a,b)=> b.length - a.length)
        return res1.slice(0,k).map(el=> el[0])
    return 
    }
}

