function bSearch(arr, target) {
  if (arr.length === 0){
    return null;
  }

  var mid = Math.floor(arr.length / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return bSearch(arr.slice(0, mid), target);
  } else {
    var partialSolution = bSearch(arr.slice(mid + 1, arr.length), target);
  }

    return partialSolution === null ? null : partialSolution + mid + 1;
}

bSearch([1,2,3], 3);
