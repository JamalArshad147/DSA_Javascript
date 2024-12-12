class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
      this.height = 1;
    }
  }
  
  class AVL_TREE {
    constructor() {
      this.root = null;
    }
  
    getHeight(node) {
      return node ? node.height : 0;
    }
  
    loadBalancer(node) {
      return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }
  
    leftRotation(X) {
      let Y = X.right;
      let T = Y.left;
  
      Y.left = X;
      X.right = T;
  
      X.height = Math.max(this.getHeight(X.left), this.getHeight(X.right)) + 1;
      Y.height = Math.max(this.getHeight(Y.left), this.getHeight(Y.right)) + 1;
  
      return Y;
    }
  
    rightRotation(X) {
      let Y = X.left;
      let T = Y.right;
    
      // Perform rotation
      Y.right = X;
      X.left = T;
    
      // Update heights
      X.height = Math.max(this.getHeight(X.left), this.getHeight(X.right)) + 1;
      Y.height = Math.max(this.getHeight(Y.left), this.getHeight(Y.right)) + 1;
    
      // Return new root
      return Y;
    }
    
  
    insert(val, node) {
      if (!node) return new Node(val);
  
      if (val < node.val) {
          node.left = this.insert(val, node.left);
      } else if (val > node.val) {
        node.right = this.insert(val, node.right);
      } else {
        return node;
      }
  
      node.height =
        Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  
      let balance = this.loadBalancer(node);
  
      // LL Case
      if (balance > 1 && val < node.left.val) {
        return this.rightRotation(node);
      }
  
      // RR Case (Corrected)
      if (balance < -1 && val > node.right.val) {
        return this.leftRotation(node); // Should be leftRotation
      }
  
      // LR Case
      if (balance > 1 && val > node.left.val) {
        node.left = this.leftRotation(node.left);
        return this.rightRotation(node);
      }
  
      // RL Case
      if (balance < -1 && val < node.right.val) {
        node.right = this.rightRotation(node.right);
        return this.leftRotation(node);
      }
  
      return node;
    }
  
    // Print tree structure
    printTree(node = this.root, prefix = "", isLeft = true) {
      if (node === null) return;
  
      if (node.right !== null) {
        this.printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
      }
  
      console.log(prefix + (isLeft ? "└── " : "┌── ") + node.val);
  
      if (node.left !== null) {
        this.printTree(node.left, prefix + (isLeft ? "    " : "│   "), true);
      }
    }
  
    add(val) {
      return (this.root = this.insert(val, this.root));
    }
  }
  
  // Example usage:
  const tree = new AVL_TREE();
  tree.add(10);
  tree.add(20);
  tree.add(5);
  tree.add(4);
  tree.add(15);
  tree.add(1);
  tree.add(2);
  tree.add(5);
  tree.add(4);
  tree.add(5);
  
  console.log("Tree Structure:");
  tree.printTree();
  