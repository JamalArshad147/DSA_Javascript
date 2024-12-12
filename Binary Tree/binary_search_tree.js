class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(val, root = this.root) {
      let newNode = new TreeNode(val);
  
      if (root === null) {
        if (this.root === null) this.root = newNode; // Update the root for the first node
        return newNode;
      }
  
      if (val < root.val) root.left = this.insert(val, root.left);
      else root.right = this.insert(val, root.right);
  
      return root;
    }
  
    remove(val) {
      const removeNode = (root, val) => {
        if (root === null) return null;
  
        if (val < root.val) {
          root.left = removeNode(root.left, val);
          return root;
        } else if (val > root.val) {
          root.right = removeNode(root.right, val);
          return root;
        } else {
          // Node with only one child or no child
          if (root.left === null) {
            return root.right;
          } else if (root.right === null) {
            return root.left;
          } else {
            // Node with two children: Get the inorder successor (smallest in the right subtree)
            let minNode = this.findMin(root.right);
            root.val = minNode.val;
            root.right = removeNode(root.right, minNode.val);
            return root;
          }
        }
      };
  
      this.root = removeNode(this.root, val);
    }
  
    exits(val, root = this.root) {
      if (root === null) return false;
  
      if (root.val === val) return true;
  
      return val < root.val
        ? this.find(val, root.left)
        : this.find(val, root.right);
    }
  
    findMin(root = this.root) {
      let min = root;
      while (min.left !== null) min = min.left;
      return min;
    }
  
    findMax(root = this.root) {
      let max = this.root;
      while (max.right !== null) max = max.right;
      return max;
    }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    // DFS
    inOrderTraversal(root = this.root) {
      if (root === null) return;
  
      this.inOrderTraversal(root.left);
      process.stdout.write(`${root.val}, `); // print val of root
      this.inOrderTraversal(root.right);
    }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    preOrderTraversal(root = this.root) {
      if (root === null) return;
  
      process.stdout.write(`${root.val}, `);
      this.inOrderTraversal(root.left);
      this.inOrderTraversal(root.right);
    }
  
    postOrderTraversal(root = this.root) {
      if (root === null) return;
  
      this.inOrderTraversal(root.left);
      this.inOrderTraversal(root.right);
      process.stdout.write(`${root.val}, `);
    }
  
    // BFS
    levelOrderTraversal(root = this.root) {
      if (root === null) {
        return;
      }
  
      let queue = [];
      queue.push(root);
      queue.push(null);
  
      while (queue.length > 1) {
        let node = queue.shift();
  
        if (node === null) {
          process.stdout.write("\n");
          queue.push(null);
        } else {
          process.stdout.write(`${node.val} `);
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
        }
      }
    }
  
    maxHeight(root = this.root) {
      if (root === null) {
        return 0;
      }
  
      let left = this.maxHeight(root.left);
      let right = this.maxHeight(root.right);
  
      return Math.max(left, right) + 1;
    }
  
    minHeight(root = this.root) {
      if (root === null) {
        return 0;
      }
  
      let left = this.minHeight(root.left);
      let right = this.minHeight(root.right);
  
      return Math.min(left, right) + 1;
    }
  
    sumOfNodes(root = this.root) {
      if (root === null) return 0;
  
      let left = this.sumOfNodes(root.left);
      let right = this.sumOfNodes(root.right);
  
      return left + right + root.val;
    }
  
    nodeCount(root = this.root) {
      if (root === null) return 0;
  
      let left = this.nodeCount(root.left);
      let right = this.nodeCount(root.right);
  
      return left + right + 1;
    }
  
    maxDiameter(root = this.root) {
      return this.maxHeight(root.left) + this.maxHeight(root.right) + 1;
    }
  
    nodeHeight(val, root = this.root) {
      if (root === null) {
        return 0;
      }
  
      let h = 0;
  
      if (root.val === val) {
        return 0;
      } else if (root.val < val) {
        h = this.nodeHeight(val, root.right);
      } else if (root.val > val) {
        h = this.nodeHeight(val, root.left);
      }
  
      return h + 1;
    }
  
    diameterBetweenTwoNodes(val1, val2, root = this.root) {
      if (val2 < root.val) {
        return this.diameterBetweenTwoNodes(val1, val2, root.left);
  
      } else if (val1 > root.val) {
        return this.diameterBetweenTwoNodes(val1, val2, root.right);
  
      } else {
        return this.nodeHeight(val1, root) + this.nodeHeight(val2, root) + 1;
      }
    }
  
    printTree(node = this.root, prefix = "", isLeft = true) {
      if (node === null) return;
  
      if (node.right !== null) {
        this.printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
      }
  
      console.log(prefix + (isLeft ? "└── " : "┌── ") + node.val); // Use node.val instead of node.value
  
      if (node.left !== null) {
        this.printTree(node.left, prefix + (isLeft ? "    " : "│   "), true);
      }
    }
  }
  
  // Testing the simplified insert and remove
  const bst = new BinarySearchTree();
  
  // Inserting vals
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(3);
  bst.insert(7);
  bst.insert(12);
  bst.insert(18);
  bst.insert(30);
  
  console.log("Tree after inserts:");
  bst.printTree();
  
  // console.log(bst.diameterBetweenTwoNodes(12, 18));
  // console.log(bst.nodeHeight(30));
  // console.log(bst.maxDiameter());
  // console.log(bst.maxHeight());
  // console.log(bst.minHeight());
  
  // console.log(bst.sumOfNodes());
  // console.log(bst.nodeCount());
  
  bst.inOrderTraversal();
  // bst.preOrderTraversal();
  // bst.postOrderTraversal();
  // bst.levelOrderTraversal();
  
  // console.log(`Min = ${bst.findMin()}`);
  // console.log(`Max = ${bst.findMax()}`);
  // console.log(`exists(7) = ${bst.exists(7).val}`);
  // console.log(`exists(71) = ${bst.exists(71).val}`);
  
  // // Removing a leaf node
  // bst.remove(3);
  // console.log("\nTree after removing 3:");
  // bst.printTree();
  
  // // Removing a node with one child
  // bst.remove(5);
  // console.log("\nTree after removing 5:");
  // bst.printTree();
  
  // // Removing a node with two children
  // bst.remove(10);
  // console.log("\nTree after removing 10:");
  // bst.printTree();
  