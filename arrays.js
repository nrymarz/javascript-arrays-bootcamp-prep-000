function addElementToBeginningOfArray(arr,element){
  var a = arr.unshift(element);
  return a;
}
function destructivelyAddElementToBeginningOfArray(arr,element){
  return arr.unshift(element);
}