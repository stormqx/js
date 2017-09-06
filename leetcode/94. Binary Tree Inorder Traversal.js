/**
 * Created on 04/09/2017.
 */

// 二叉树先序遍历

// 递归
var inorderTraversal = function(root) {
  if(!root) return [];
  var arr = arguments[0] || [];
  inorderTraversal(root.left, arr);
  arr.push(root.val);
  inorderTraversal(root.right, arr);
  return arr;
};


// 迭代
// 实现思路：goAlongLeftBranch
var inorderTraversal = function(root) {
  if(!root) return [];
  var stack = [];
  var cur = root;
  var rel = [];
  while(cur || stack.length > 0) {
    // 向左下滑动
    while(cur) {
      stack.push(cur);
      cur = cur.left;
    }

    // 滑动到底部，弹出访问，
    cur = stack.pop();
    rel.push(cur.val);

    // 该子树的左子树和跟节点访问完成，开始访问右子树
    cur = cur.right;

  }
  return rel;
};