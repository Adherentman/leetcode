/**
 * @param {number[]} nums
 * @return {number}
 * Date: 2018-02-03
 */
var maxSubArray = function(nums) {
  let max = nums[0]

  nums.reduce((sum, num) => {
      sum = Math.max(sum + num, num)
      max = Math.max(max, sum) 
      return sum
  })
  return max
};