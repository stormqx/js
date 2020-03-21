// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
// 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
// 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
// NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。

// 二分查找，注意非递减排序，相等时候的corner case
// [1,0,1,1,1] / [1,1,1,0,1]
function minNumberInRotateArray(rotateArray)
{
    // write code here
    if(!rotateArray || !rotateArray.length) {
        return 0;
    }
    let low = 0;
    let high = rotateArray.length - 1;
    while(low < high) {
        if(rotateArray[low] < rotateArray[high]) {
            return rotateArray[low];
        }
        let mid = ( low + high ) / 2;
        if(rotateArray[mid] > rotateArray[low]) {
            low = mid;
        } else if(rotateArray[mid] < rotateArray[high]) {
            high = mid;
        } else {
            low++;
        }
    }
    return rotateArray[low];
}