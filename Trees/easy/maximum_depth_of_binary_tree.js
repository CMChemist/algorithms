
// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

//BEST SOLUTION
// @param {TreeNode} root
// @return {number}
var maxDepth = function(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

//MY SOLUTION
// var maxDepth = function(root) {
//     let result = maxDepthHelper(root, 0, 0);
//     return result.maxDepth
// };

// const maxDepthHelper = (node, currDepth, maxDepth) => {
//     if (node === null) {
//         return {'currDepth': currDepth, 'maxDepth': maxDepth}
//     }
    
//     currDepth++
//     if(currDepth > maxDepth) maxDepth = currDepth;
   
//     let result = maxDepthHelper(node.right, currDepth, maxDepth);
//     result = maxDepthHelper(node.left, currDepth, result.maxDepth);
    
//     return result;
// }


let root = new TreeNode(3)
let second9 = new TreeNode(9)
let second20 = new TreeNode(20)
let third15 = new TreeNode(15)
let third7 = new TreeNode(7)

root.left = second9;
root.right = second20;
second20.left = third15;
second20.right = third7;

console.log('root maxDepth = ', maxDepth(root))