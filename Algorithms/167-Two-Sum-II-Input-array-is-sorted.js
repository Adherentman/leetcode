/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * Date: 2018-03-09
 */
var twoSum = function(numbers, target) {
  let table = new Map()
  for (let i = 0; i < numbers.length; i++){
      if (table.has(numbers[i])) {
          return [table.get(numbers[i]) + 1, i + 1]
      }
      table.set((target - numbers[i]), i)
  }
  return 'Not Found'
};