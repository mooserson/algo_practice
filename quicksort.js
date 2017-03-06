const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr
  }
  var pivot = arr.pop()
  var left = []
  var right = []

  arr.forEach(el => {
    if (el <= pivot) {
      left.push(el);
    } else {
      right.push(el);
    }
  });

  return quickSort(left).concat(pivot).concat(quickSort(right));
};
