// Q: 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数


// 思路一：暴力搜索，时间复杂度 O(n2)
// 思路二：左下角符合特性，列小于该值，行大该数值，向右上寻找

function Find(target, array) {
    let rowLen = array.length - 1;
    let columnLen = array[0].length - 1;
    // corner case
    if(rowLen === 0 && columnLen === 0) {
        return false;
    }

    let i = rowLen, j = 0, value;
    while(i >= 0 && j <= columnLen) {
        value = array[i][j];
        if(target === value) {
            return true;
        } else if(target > value) {
            j++;
        } else {
            i--;
        }
    }
    return false;
}