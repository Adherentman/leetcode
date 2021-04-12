function generate(numRows: number): number[][] {
  if(numRows == 0) return [];
  if(numRows == 1) return [[1]];
  let result = [[1], [1, 1]];
  for(let i = 2; i < numRows; i++) {
      const rows = []
      for(let j = 1; j < result[i -1].length; j++) {
          rows.push(result[i - 1][j] + result[i - 1][j - 1]);
      }
      result.push([1, ...rows, 1]);
  };
  return result;
};