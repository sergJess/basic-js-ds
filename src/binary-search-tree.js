const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node  {
  constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
  }
}
module.exports = class BinarySearchTree {
constructor(){
  this.rootVal = null;
}
  root() {
    if(this.rootVal){
      return this.rootVal;
    }
   return null;
  }

  add( data ) {
    this.rootVal  = addNode(this.rootVal, data);
    function addNode(node, data){

      if(!node){
        return new Node(data);
      }
      if(node.data === data){
        return node;
      }
      if(node.data > data){
        node.left = addNode(node.left, data);
      }
      else{
        node.right = addNode(node.right, data);
      }

      return node;
    }
   
  }

  has( data ) {
    return searchEl(this.rootVal, data);

    function searchEl(node, data){
if(!node){
  return false;
}
if(node.data === data){
return true;
}
return node.data < data?
searchEl(node.right, data) :
searchEl(node.left, data)
    }

  }

  find( data ) {
    return searchElem(this.rootVal, data);
    function searchElem(node, data){
if(!node){
  return null;
}
if(node.data === data){
return node;
}
return node.data < data?
searchElem(node.right, data) :
searchElem(node.left, data)
    }
  }

  remove(data){
    this.rootVal= removeNode(this.rootVal, data); 
    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
     
        if (!node.left && !node.right) {
          
          return null;
        }

        if (node.left === null) {
         
          node = node.right;
          return node;
        }

        if (node.right === null) {
          
          node = node.left;
          return node;
        }

        let maxLeft = node.left;
        while (maxLeft.right) {
          maxLeft = maxLeft.right;
        }
        node.data = maxLeft.data;

        node.left = removeNode(node.left, maxLeft.data);

        return node;
      }
    }
  }

  min() {
   if(this.rootVal){
     let x = this.rootVal;
     while(x.left){
      x = x.left;
     }
     return x.data;
   }
   return null;
  }

  max() {
    if(this.rootVal){
      let x = this.rootVal;
      while(x.right){
       x = x.right;
      }
      return x.data;
    }
    return null;
  }

}
