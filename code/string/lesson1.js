export default str => {
  // 字符串按照空格进行分割,保存为数组,数组元素的先后顺序就是单词的顺序
  const arr = str.split(' ');
  // 对数组进行遍历,然后翻转
  const result = arr.map(item => {
    return item.split('').reverse().join('');
  });
  return result.join(' ');
};
