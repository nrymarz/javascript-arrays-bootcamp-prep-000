function addElementToBeginningOfArray(arr,element){
  var a = [element,...arr];
  return a;
}
function destructivelyAddElementToBeginningOfArray(arr,element){
  return arr.unshift(element);
}
var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]
function addElementToEndOfArray(arr,element){
  newArray = [arr...,element];
  return newArray;
}
function destructivelyAddElementToEndOfArray(arr,element){
  return arr.push(element);
}
function accessElementInArray(arr,index){
  return arr[index];
}
function destructivelyRemoveElementFromBeginningOfArray(arr){
  return arr.shift();
}
function removeElementFromBeginningOfArray(arr){
  newArray = arr.slice(1);
  return newArray;
}
function destructivelyRemoveElementFromEndOfArray(arr){
  return arr.pop();
}
function removeElementFromEndOfArray(arr){
  newArray = arr.slice(0,arr.length-1);
  return newArray;
}
