/**
 * Created on 31/08/2017.
 */

// 计算二进制中1的个数

// 与1进行与运算
function countBit(num) {
  var count = 0;
  while(num !== 0) {
    if(num & 1) {
      count++;
    }
    num = num >>> 1;
  }
  return count;
}

// n与n-1进行与运算，可以消除最低非零的1
function countBit(num) {
  var count = 0;
  while(num !== 0) {
    count++;
    num = num & (num-1);
  }
  return count;
}

countBit(3);
countBit(17);