/**
 * Created on 31/08/2017.
 */


//乱序同字母字符串

//给定两个字符串，判断是否颠倒字母而成的字符串，譬如 Mary 和 Army 就是同字母而顺序颠倒。


function disorderString(str1, str2) {
  var newStr1 = str1.split('').sort().join('');
  var newStr2 = str2.split('').sort().join('');
  return newStr1 === newStr2;
}

var str1 = '12324';
var str2 = '23421';
disorderString(str1, str2);