/**
 * @param {number[]} nums
 * @return {number}
 * Date: 2018-03-03
 */
var singleNumber = function(nums) {
  return nums.reduce((a, b) => a ^ b);
};