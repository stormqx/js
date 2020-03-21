// Q:数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
// 由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。

function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    let mapping = {};
    let max = 0;
    let maxVal = 0;
    let half = numbers.length / 2;
    let i = 0;
    while((i < numbers.length) && (max <= half)) {
        let val = numbers[i];
        if(mapping[val]) {
            mapping[val]++;
        } else {
            mapping[val] = 1;
        }
        if(mapping[val] > max) {
            max = mapping[val];
            maxVal = val;
        }
        i++;
    }
    return (max > half) ? maxVal : 0;
}

console.log(MoreThanHalfNum_Solution([1,2,3,2,2,2,5,4,2]));