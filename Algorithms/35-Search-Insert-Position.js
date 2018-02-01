/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Date: 2018-02-01
 * 算法： 二分查找
 */
var searchInsert = function(nums, target) {

  var low = 0;
  var high = nums.length - 1;

  while (low <= high) {
    var mid = (low + high)/2 >> 0;
    var guess = nums[mid];
    if(guess === target) return mid;
    if(guess > target)  high = mid - 1
    else  low = mid + 1
  }
  return low
};