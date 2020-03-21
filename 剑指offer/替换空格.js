// Q:请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。

// 思路一：直接调用string的内置函数
function replaceSpace(str)
{
    // write code here
   return str.split(' ').join('%20');
}

// 思路二: 字符串直接正则
function replaceSpace(str) {
    // write code here
    return str.replace(/ /g, '%20');
}
