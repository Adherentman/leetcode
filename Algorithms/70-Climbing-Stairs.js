/**
 * @param {number} n
 * @return {number}
 * Date: 2018-02-25
 */
var climbStairs = function(n) {
   if (n == 1) {
            return 1;
    }
    var first = 1;
    var second = 2;
    for (var i = 3; i <= n; i++) {
        var third = first + second;
        first = second;
        second = third;
    }
    return second;
};