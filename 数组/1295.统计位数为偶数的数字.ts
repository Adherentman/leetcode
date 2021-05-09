function findNumbers(nums: number[]): number {
  let res = 0;
  nums.map(x => {
    if(x.toString().length % 2 == 0) {
      res += 1;
    }
  })
  return res;
};