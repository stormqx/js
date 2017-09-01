/**
 * Created on 31/08/2017.
 */

// 判断传入值是否为2的乘方

// 因为 n & (n-1) 可以消除二进制中最低非0位。 2的乘方的二进制表现形式下只有一个1。

function is2Power(num) {
  if(num < 1) return false;
  return (num & (num-1)) === 0;
}


// 判断传入值是否为4的乘方

// 先用 n & (n-1) 判断是否为2的乘方，在用0x55555555 & n 判断1是否在奇数位置上

function is4Power(num) {
  if(num < 1) return false;
  return (num & (num-1)) === 0
  && !!(num & 0x55555555);
}

