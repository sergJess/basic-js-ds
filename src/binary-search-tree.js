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
    this.rootVal  = addWithin(this.rootVal, data);
    function addWithin(node, data){

      if(!node){
        return new Node(data);
      }
      if(node.data === data){
        return node;
      }
      if(node.data > data){
        node.left = addWithin(node.left, data);
      }
      else{
        node.right = addWithin(node.right, data);
      }

      return node;
    }
   
  }

  has( data ) {
    return searchWithin(this.rootVal, data);

    function searchWithin(node, data){
if(!node){
  return false;
}
if(node.data === data){
return true;
}
return node.data < data?
searchWithin(node.right, data) :
searchWithin(node.left, data)
    }

  }

  find( data ) {
    return searchWithin(this.rootVal, data);
    function searchWithin(node, data){
if(!node){
  return null;
}
if(node.data === data){
return node;
}
return node.data < data?
searchWithin(node.right, data) :
searchWithin(node.left, data)
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
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
