/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length == 0) return 0;
  var i = 0;
  for (let j = 1; j < nums.length; j++) {
      if (nums[j] != nums[i]) {
          i++;
          nums[i] = nums[j];
      }
  }
  return i + 1;
};
//-----------------------
function removeDuplicates(nums){
  var i =0;
  var j =0;
  while(i < nums.length){
      if(nums[j] != nums[i]){
          j++;
          nums[j] = nums[i];
      }
      i++;
  }
  return j+1
}