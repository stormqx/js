// Q:一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。

// 思路一：字典扫一遍
function FindNumsAppearOnce(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    let mapping = {};
    for(let i=0; i < array.length; i++) {
        let value = array[i];
        if(!mapping[value]) {
            mapping[value] = 1;
        } else {
            delete mapping[value];
        }
    }
    return Object.keys(mapping);
}

// 思路二：相同的数字异或结果是0
function FindNumsAppearOnce(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    
    let xor = 0;
    // 异或全部值得到差异值
    for(let i = 0; i < array.length; i++) {
        xor ^= array[i];
    }

    // 二进制，使用与运算符，找到任意一个为1的位置，证明该位置为差异点
    // 注意操作符优先级
    let index = 1;
    while((index & xor) === 0) {
        index = index << 1;
    }

    let a = 0, b = 0;
    for(let i = 0; i < array.length; i++) {
        if((index & array[i]) === 0) {
            a ^= array[i];
        } else {
            b ^= array[i];
        }
    }
    return [a, b];
}