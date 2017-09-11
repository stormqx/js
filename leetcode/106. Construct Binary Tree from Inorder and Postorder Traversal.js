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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
// 中序和后序重建二叉树。

// 后序就是先序的逆过程。所以从后向前先构建右子树，再构建左子树
var buildTree = function(inorder, postorder) {
  if(inorder.length <= 0) return null;
  var val = postorder.pop();
  var idx = inorder.indexOf(val);
  var node = new TreeNode(val);
  // 先右后左
  node.right = buildTree(inorder.slice(idx+1), postorder);
  node.left = buildTree(inorder.slice(0, idx), postorder);
  return node;
};


// 方法二
var buildTree = function(inorder, postorder) {
  if(inorder.length <= 0) return null;
  var len = postorder.length;
  var val = postorder[len-1];
  var idx = inorder.indexOf(val);
  var node = new TreeNode(val);
  // 先右后左
  node.right = buildTree(inorder.slice(idx+1), postorder.slice(idx, len-1));
  node.left = buildTree(inorder.slice(0, idx), postorder.slice(0, idx));
  return node;
};