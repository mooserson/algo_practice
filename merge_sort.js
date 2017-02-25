function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  var mid = Math.floor(arr.length / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var result = [];

  while(left.length > 0 && right.length > 0){
    var leftNum = left.shift();
    var rightNum = right.shift();
    if (leftNum > rightNum) {
      result.push(rightNum, leftNum);
    } else {
      result.push(leftNum, rightNum);
    }
  }

  return result.concat(left, right);
}
