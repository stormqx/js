/**
 * Created on 09/09/2017.
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// 先序和中序重建二叉树。


// 方法一：使用shift操作, 传入整个preorder
// 注意：虽然我们向每个buildTree传递preorder, 但是在left的递归中已经将左子树的node.val shift出来。

var buildTree = function(preorder, inorder) {
  if(inorder.length<=0) return null;
  var val = preorder.shift();
  var idx = inorder.indexOf(val);
  var node = new TreeNode(val);
  node.left = buildTree(preorder,  inorder.slice(0, idx));
  node.right = buildTree(preorder, inorder.slice(idx+1));
  return node;
};




// 方法二: 不用shift操作，判断左右子树的长度进行slice操作

var buildTree = function(preorder, inorder) {
  if(inorder.length<=0) return null;
  var val = preorder[0];
  var idx = inorder.indexOf(val);
  var node = new TreeNode(val);
  node.left = buildTree(preorder.slice(1, idx+1),  inorder.slice(0, idx));
  node.right = buildTree(preorder.slice(idx+1), inorder.slice(idx+1));
  return node;
};
