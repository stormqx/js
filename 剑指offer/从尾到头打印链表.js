// 输入一个链表，按链表从尾到头的顺序返回一个ArrayList。

// 直接用一个栈存储
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

function printListFromTailToHead(head)
{
    // write code here
    var arr = [];
    while(head) {
        arr.unshift(head.val);
        head = head.next;
    }
    return arr;
}
