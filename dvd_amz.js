const wordSplit = (words, length) => {
  var wordsArr = words.split(" ");
  var result = [];

//add space to each el for counting
  wordsArr = wordsArr.map(el => {
    el + " ";
  });

// remove final space
  wordsArr[wordsArr.length - 1] = wordsArr[wordsArr.length - 1].slice(0, -1);

  var chunk = 0;
  for (var i = 0; i < wordsArr.length; i++) {
    if(result[chunk].length >= length){
      chunk ++
    }

    result[chunk] ? result[chunk] += wordsArr[i] : ;
    let remainingLength = length - wordsArr[i].length;
    if(words[i + 1].length < remainingLength){
      result += wordsArr.slice(i, i + 1);

    }
  }
};
