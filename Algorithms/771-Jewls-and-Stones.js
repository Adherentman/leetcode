/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let filter = J;
  let data = S;
  var sum = 0;
  for(let i in data){
      var result = filter.indexOf(data[i]);
      if( result != -1){
          sum++
      }
  }
  return sum;
};