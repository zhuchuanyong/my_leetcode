const letterCombinations = (str) => {
  // 如果输入为 "" 时, LeetCode 答案上是返回 []
  if (str === '') {
    return [];
  }
  // 建立电话号码键盘映射
  const map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  // 把输入的数字转成数组 234=> [2,3,4]
  const num = str.split('');
  // 保存键盘映射后的内容 23 =>['abc','def]
  const code = [];
  num.forEach(element => {
    if (map[element]) {
      code.push(map[element]);
    }
  });

  // 还需要加一个判断, 如果只输入一个数字, 如 "2" 的时候, 只进行一次循环.
  if (code.length === 1) {
    var temp = [];
    for (let i = 0; i < code[0].length; i++) {
      temp.push(code[0][i]);
    }
    return temp;
  }

  const comb = (arr) => {
    const tmp = [];
    for (let i = 0, ii = arr[0].length; i < ii; i++) {
      // const itemi = arr[i];
      for (let j = 0, ij = arr[1].length; j < ij; j++) {
        // const itemj =
        tmp.push(`${arr[0][i]}${arr[1][j]}`);
      }
    }
    arr.splice(0, 2, tmp);
    if (arr.length > 1) {
      comb(arr);
    } else {
      return tmp;
    }
    return arr[0];
  };
  return comb(code);
};

export default letterCombinations;
