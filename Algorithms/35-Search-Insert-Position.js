/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Date: 2018-02-01 
 */
var searchInsert = function(nums, target) {
  let mid, head = 0, tail = nums.length - 1
  while (head <= tail) {
      mid = (head + tail) >> 1
  
      if (nums[mid] === target) return mid
      if (nums[mid] < target) head = mid + 1
      if (nums[mid] > target) tail = mid - 1
  }
  return head
};