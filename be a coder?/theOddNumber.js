/**
 * Created on 30/08/2017.
 */

//找出出现奇数次的数

//给你n个数，其中有且仅有一个数出现了奇数次，其余的数都出现了偶数次。用线性时间常数空间找出出现了奇数次的那一个数。


//将所有元素都异或一遍，最后得到的就是那个出现奇数次的元素
function getShowOddTimesNumber(arr) {
  return arr.reduce((pre,cur) => {
    return pre ^ cur;
  })
}


var arr = [1, 1, 2, 2, 3];

getShowOddTimesNumber(arr);
