// in [-5,-2,0,1,2,-4,-8]
// out: [0, 6]

// iterate through and if index is < previous, store it
// also store previous and continue to iterate. Update index if new is less than previous good index.
// iterate through and find pos greater than least out of position value
[1,8,3,4,5,6,7,-1,8]

function unsortedBounds (arr) {
  var lastGoodPos = 0;
  var lastGoodVal = arr[0]
  var lowestBad = null;
  var rightmostBadPos = null;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < lastGoodVal) {
      rightmostBadPos = i
      var num = arr[i];
      if (lowestBad === null || lowestBad > num) {
        lowestBad = num;
      }
    } else {
      lastGoodPos = i
      lastGoodVal = arr[i]
    }

  }

  if (lowestBad !== null) {
    var j = 0
    while (j <= lastGoodPos) {
      if (lowestBad < arr[j]) {
        var leftmostBadPos = j
        break;
      }
      j++;
    }
  }

  return [leftmostBadPos, rightmostBadPos]
}
