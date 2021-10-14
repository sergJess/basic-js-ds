const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList( l, k ) {
  const result = [];
  let x = l;
while(x.next !==null){
  if(x.value !== k){
    result.push(x.value);
  }
  x =x.next;
}
if(x.value !== k){
  result.push(x.value);
}
if(result.length > 0){
  let listnode  = new ListNode(result[0]);
  let prev = listnode;
  let next  = null;
let  i = 1;
while(i < result.length){
  next = new ListNode(result[i]);
  prev.next = next;
  prev = next;
  next = null;
i++
}
return listnode;
}
return new ListNode(null);

}

function ListNode(x) {
  this.value = x;
  this.next = null;
}