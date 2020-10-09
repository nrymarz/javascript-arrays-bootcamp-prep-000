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
