const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this.bstRoot = null;
  }

  root() {
    return this.bstRoot;
  }

  add(data) {
    const append = (node, data) => {
      if (!node) {
        return new Node(data);
      } else if (node.data == data) {
        return node;
      } else if (node.data < data){
        node.right = append(node.right, data)
      } else {
        node.left = append(node.left, data)
      }
      return node;
    }

    this.bstRoot = append(this.bstRoot, data);
  }

  has(data) {
    const doesExist = (node, data) => {
      if (!node) {
        return false
      } else if (node.data == data) {
        return true;
      } else if (node.data > data) {
        return doesExist(node.left, data);
      } else {
        return doesExist(node.right, data)
      }
    }

    return doesExist(this.bstRoot, data);
  }

  find(data) {
    const getNode = (node, data) => {
      if (!node) {
        return null
      } else if (node.data == data) {
        return node;
      } else if (node.data > data) {
        return getNode(node.left, data);
      } else {
        return getNode(node.right, data)
      }
    }

    return getNode(this.bstRoot, data);
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (!node) {
        return null;
      } else if (node.data > data) {
				node.left = removeNode(node.left, data);
				return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
				return node;
      } else {
        if (!node.left && !node.right) {
					return null
				} else if (!node.left) {
					node = node.right;
					return node;
				} else if (!node.right) {
					node = node.left;
					return node;
				} else {
          let minOfMax = node.right;
          while (minOfMax.left) {
            minOfMax = minOfMax.left;
          }
          node.data = minOfMax.data;

          node.right = removeNode(node.right, minOfMax.data);
          return node;
        }
      }
    }
    this.bstRoot = removeNode(this.bstRoot, data);
  }

  min() {
    if (!this.bstRoot) {
      return null;
    } else {

      const getMin = (node) => {
        if (node.left) {
          return getMin(node.left);
        }
        return node.data
      }
      return getMin(this.bstRoot);
    }
  }

  max() {
    if (!this.bstRoot) {
      return null;
    } else {

      const getMax = (node) => {
        if (node.right) {
          return getMax(node.right);
        }
        return node.data
      }

      return getMax(this.bstRoot);
    }
  }
}

module.exports = {
  BinarySearchTree
};
