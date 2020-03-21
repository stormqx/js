// Q: 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
// 使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。

// 思路一： 双数组
function reOrderArray(array)
{
    // write code here
    let oddArray = [], evenArray = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            evenArray.push(array[i])
        } else {
            oddArray.push(array[i])
        }
    }
    return oddArray.concat(evenArray)
}

console.log(reOrderArray([1,2,3,4,5]))