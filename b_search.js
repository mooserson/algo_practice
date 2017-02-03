function b_search(arr, target) {
  if (arr.length === 0) {
    return null;
  }

  var mid = Math.floor(arr.length / 2);

  if(arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    b_search(arr.slice(0, mid), target);
  } else {
    b_search(arr.slice(mid + 1), target);
  }
}
