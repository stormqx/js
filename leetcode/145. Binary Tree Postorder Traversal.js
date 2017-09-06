/**
 * Created on 06/09/2017.
 */

// 递归
var postorderTraversal = function(root) {
  if(!root) return [];
  var rel = arguments[1] || [];
  postorderTraversal(root.left, rel);
  postorderTraversal(root.right, rel);
  rel.push(root.val);
  return rel;
};


// 迭代
// 前序遍历的变形生成 后序遍历
// 前序：中 -> 左 -> 右.
// 后序：左 -> 右 -> 中.  我们进行前序的逆操作就是后序...
var postorderTraversal = function(root) {
  if(!root) return [];
  var stack = [];
  var rel = [];
  var cur = root;

  while(cur || stack.length > 0) {
    while(cur) {
      stack.push(cur.left);
      rel.unshift(cur.val);
      cur = cur.right;
    }

    cur = stack.pop();
  }
  return rel;
};