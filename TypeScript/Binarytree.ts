class TreeNode<T> {
    val: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;
    
    constructor(val: T) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
}
  
class BinaryTree<T> {
    root: TreeNode<T> | null;
    
    constructor() {
      this.root = null;
    }
    
    insert(val: T) {
      const node = new TreeNode(val);
      
      if (!this.root) {
        this.root = node;
        return;
      }
      
      let current = this.root;
      
      while (current) {
        if (val < current.val) {
          if (!current.left) {
            current.left = node;
            return;
          }
          
          current = current.left;
        } else {
          if (!current.right) {
            current.right = node;
            return;
          }
          
          current = current.right;
        }
      }
    }
    
    search(val: T): TreeNode<T> | null {
      let current = this.root;
      
      while (current) {
        if (val === current.val) {
          return current;
        } else if (val < current.val) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      
      return null;
    }
    
    PreOrder(node: TreeNode<T> | null, visit: (node: TreeNode<T>) => void) {
      if (!node) return;
      
      visit(node);
      this.PreOrder(node.left, visit);
      this.PreOrder(node.right, visit);
    }
    
    InOrder(node: TreeNode<T> | null, visit: (node: TreeNode<T>) => void) {
      if (!node) return;
      
      this.InOrder(node.left, visit);
      visit(node);
      this.InOrder(node.right, visit);
    }
    
    PostOrder(node: TreeNode<T> | null, visit: (node: TreeNode<T>) => void) {
      if (!node) return;
      
      this.PostOrder(node.left, visit);
      this.PostOrder(node.right, visit);
      visit(node);
    }
}

const tree = new BinaryTree<number>();

tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

console.log("INORDER:");

tree.InOrder(tree.root, node => {
  console.log(node.val);
});

console.log("PREORDER:");
tree.PreOrder(tree.root, node => {
    console.log(node.val);
});

console.log("POSTORDER:");
tree.PostOrder(tree.root, node => {
    console.log(node.val);
});

const found = tree.search(5);

if (found) {
  console.log(`value ${found.val} is found`);
} else {
  console.log(`value is not found`);
}