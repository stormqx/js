/**
 * Created on 04/09/2017.
 */


// 二叉树先序遍历

// 递归
var preorderTraversal = function(root) {
  if(!root) return [];
  var arr = arguments[1] || [];
  arr.push(root.val);
  preorderTraversal(root.left, arr);
  preorderTraversal(root.right, arr);
  return arr;
};

// 迭代
// 实现思路: visitAlongLeftBranch
var preorderTraversal = function(root) {
  if(!root) return [];
  var stack = [];
  var cur = root;
  var rel = [];
  while(cur || stack.length > 0) {
    while(cur) {
      stack.push(cur.right);
      rel.push(cur.val);
      cur = cur.left;
    }
    cur = stack.pop();
  }
  return rel;
};


