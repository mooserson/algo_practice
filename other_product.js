function pramp2(arr) {
   var result = [1];
   var product = 1;
   for(var i = 1; i < arr.length; i++){
     product *= arr[i - 1];
     result[i] = product;
   }
   product = 1;
   for(var j = arr.length - 2; j >= 0; j--){
     product *= arr[j + 1];
     result[j] *= product;
   }
   console.log(result);
}

function otherProduct3(arr){
  var result = [1];
  var product = 1;

  for (var i = 1; i < arr.length; i++) {
    product *= arr[i - 1];
    result[i] = product;
  }

  product = 1;
  for (i = arr.length - 2; i >= 0; i--) {
    product *= arr[i + 1];
    result[i] *= product;
  }
  console.log(result);
}


function merge(weightArr, limit){
   var weights = {};

   for(var i = 0; i < weightArr.length; i++){
      if(weights[limit - weightArr[i]]){
         return [weights[limit - weightArr[i]], i];
      }else{
         weights[weightArr[i]] = i;
      }
   }
   return -1;
}
