/**
 * Created on 04/09/2017.
 */
var hasPathSum = function(root, sum) {
  if(!root) return false;
  if(!root.left && !root.right && root.val === sum) return true;
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};