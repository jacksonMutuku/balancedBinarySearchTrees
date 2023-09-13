class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
}

class Tree {
    constructor(dataArray) {
      this.root = this.buildTree(dataArray);
    }
  
    buildTree(dataArray) {
      // Helper function to build a balanced BST from a sorted array
      function buildBalancedBST(arr, start, end) {
        if (start > end) return null;
  
        const mid = Math.floor((start + end) / 2);
        const node = new Node(arr[mid]);
  
        node.left = buildBalancedBST(arr, start, mid - 1);
        node.right = buildBalancedBST(arr, mid + 1, end);
  
        return node;
      }
  
      // Sort and remove duplicates from dataArray
      const sortedUniqueArray = Array.from(new Set(dataArray)).sort((a, b) => a - b);
  
      // Build the balanced BST and return the root node
      return buildBalancedBST(sortedUniqueArray, 0, sortedUniqueArray.length - 1);
    }
  
  
    insert(value) {
      // Helper function to recursively insert a value into the tree
      function insertNode(node, value) {
        if (node === null) return new Node(value);
  
        if (value < node.data) {
          node.left = insertNode(node.left, value);
        } else if (value > node.data) {
          node.right = insertNode(node.right, value);
        }
  
        return node;
      }
  
      this.root = insertNode(this.root, value);
    }
  
    delete(value) {
      // Implement your delete logic here
      // You'll need to handle cases where the node has 0, 1, or 2 children
    }
  
    find(value) {
      // Helper function to recursively find a node with a given value
      function findNode(node, value) {
        if (node === null) return null;
  
        if (value === node.data) return node;
        if (value < node.data) return findNode(node.left, value);
        return findNode(node.right, value);
      }
  
      return findNode(this.root, value);
    }

  
    isBalanced() {
      // Helper function to check if the tree is balanced
      function checkBalance(node) {
        if (node === null) return true;
  
        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);
  
        if (Math.abs(leftHeight - rightHeight) <= 1 && checkBalance(node.left) && checkBalance(node.right)) {
          return true;
        }
  
        return false;
      }
  
      return checkBalance(this.root);
    }
  
    rebalance() {
      // Helper function to build a balanced tree from the elements
      const elements = [];
      this.inorder((node) => elements.push(node.data));
      this.root = this.buildTree(elements);
    }
  }
  
  // Usage example
  function driverScript() {
    const randomNumbers = generateRandomNumbers(20); // Implement a function to generate random numbers
    const tree = new Tree(randomNumbers);
  
    console.log("Is the tree balanced?", tree.isBalanced());
  
    console.log("Level Order:");
    tree.levelOrder((node) => console.log(node.data));
  
    console.log("Preorder:");
    tree.preorder((node) => console.log(node.data));
  
    console.log("Postorder:");
    tree.postorder((node) => console.log(node.data));
  
    console.log("Inorder:");
    tree.inorder((node) => console.log(node.data));
  
    console.log("Is the tree balanced after adding unbalanced nodes?", tree.isBalanced());
  
    tree.rebalance();
  
    console.log("Is the tree balanced after rebalancing?", tree.isBalanced());
  
    console.log("Level Order (after rebalance):");
    tree.levelOrder((node) => console.log(node.data));
  
    console.log("Preorder (after rebalance):");
    tree.preorder((node) => console.log(node.data));
  
    console.log("Postorder (after rebalance):");
    tree.postorder((node) => console.log(node.data));
  
    console.log("Inorder (after rebalance):");
    tree.inorder((node) => console.log(node.data));
  }
  
  driverScript();
  