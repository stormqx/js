/**
 * Created on 07/09/2017.
 */


var kthSmallest = function(root, k) {
  var count = countNode(root.left);
  if(count+1 === k) return root.val;
  else if(count+1 > k) return kthSmallest(root.left, k);
  else return kthSmallest(root.right, k - count -1);

};

function countNode(root) {
  if(!root) return 0;
  return 1 + countNode(root.left) + countNode(root.right);
}