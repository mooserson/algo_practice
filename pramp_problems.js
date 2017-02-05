//IN
//dur - mtng duration in seconds > 0
//timesA, timesB - Availability of each person, represented by an array of arrays.2
//[[1484699926, 1484699930],[],[]] [[], [], []]
//
//OUT
//[start, end] if span >= dur ELSE []

dur = 2
  1234567890
A ------
Bc --
// Ba        --
// Bb    ----

// Bd     --

//Sort timesA and B by the first element in each sub
//Grab max start[a[0], b[0]]
//Grab min end [a[0], b[0]]
//end - start >= duration return, [max start time, min end time]

ia = 0
ib = 0
while (ia < timesA.length and ib < timesB.length):
   start = max(timesA[ia][0], timesB[ib][0])
   end = min(timesA[ia][1], timesB[ib][1])
   if (start + dur <= end):
      return [start, start + dur]
   else:
      if (timesA[ia][1] < timesB[ib][1]):
         ia = ia + 1
      else:
         ib = ib + 1
return []

After taking care of sorting, we can iterate over both arrays at once.
We use one index for each array, while forwarding one index at a time.
At each step we check if:

No overlap exists:
One time span ends before the other starts.
In this case, increase the index of the array with the earlier time.
Overlap exists for at least dur seconds:
The minimum of both end times is more than dur seconds after the maximum of both start times.
In this case, we've found a meeting time.
Overlap exists for less than dur seconds:
we've eliminated both previous cases.
In this case, we increase the index of the array with the earlier start time of its next time span.


2.  The "Sentence Reverse" Problem

Sentence Reverse

You are given an array of characters arr, which consists of sequences of characters separated by space characters. Each space-delimited sequence of characters defines a word.
How can you most efficiently reverse the order of the words in the array?
Explain and implement your solution. Lastly, analyze its time and space complexities.

For example:
[ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ', 'm', 'a', 'k', 'e', 's', '  ', 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

would turn into:
[ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ', 'm', 'a', 'k', 'e', 's', '  ', 'p', 'e', 'r', 'f', 'e', 'c', 't' ]

Hints & Tips
Even if your language of choice enables that, using standard functions to join the characters into a string, split it and reverse the split words is not efficient. When you do that the compiler/interpreter is using O(n) space to create the string, O(n) space to hold the split words and additional O(n) space to hold the re-joined reversed string. Also, the idea of the question is to roll up your sleeves and do it yourself. Whenever a function like that is used ask your peer to explain the time and space complexity it takes and consider this on their complexity analysis.

Watch for edge cases handling in your peer's solution, e.g. empty array, array with nothing but spaces, array with one word only, multiple spaces between words.

To get the maximum rating for problem solving, your peer must achieve a linear time complexity and a constant space complexity with no hints.

If you have time left, ask your peer how the mirrorReverse function could be implemented with a single index. It's done with left to right linear iteration and swapping arr[i] and arr[n-1-i] as long as i < n-1-i.

Solution
A possible solutions is doing a linear iteration on arr while pushing a copy of the word to a stack and then pulling them in reverse order while copying the words back into arr. Another approach is initializing a new array at the same length, iterating arr from right to left and copying any sequence of characters to the new array from left to right. Both take linear O(n) runtime and at least O(n) space complexity.

A more elegant and efficient approach is to reverse all the characters in arr and then reverse the characters in each word separately. The first reverse will give us the words on the reverse order we need, but will also reverse the characters of each word. The second reverse, applied to each word separately, fixes that.
Reversing items in an array is done by a 'mirror' function, that swaps the items of every 2 indices with the same distance from the middle.

function reverseWords(arr):
   # reverse all characters:
   n = length(arr)
   mirrorReverse(arr, 0, n-1)

   # reverse each word:
   wordStart = null
   for i from 0 to n-1:
      if (arr[i] == " "):
         if (wordStart != null):
            mirrorReverse(arr, wordStart, i-1)
            wordStart = null
      else if (i == n-1):
         if (wordStart != null):
            mirrorReverse(arr, wordStart, i)
      else:
         if (wordStart == null):
            wordStart = i

# helper function - reverses the order of items in arr
# please note that this is language dependent:
# if are arrays sent by value, reversing should be done in place
function mirrorReverse(arr, start, end):
   tmp = null
   while (start < end):
      tmp = arr[start]
      arr[start] = arr[end]
      arr[end] = tmp
      start++
      end--

Time Complexity: Iterating over the array twice with constant number of actions for each item, is linear O(n).

Space Complexity: using iteration indices and one temp variable takes constant O(1) memory.


-Brute force:

const sentenceReverse = function (arr) {
  var result = [[]]

  for(var i = 0; i < arr.length; i++){
     var j = 0
     while(arr[i] !== " "){
         result[j].push(arr[i]);
         i++;
      }
     j++;
  }
   var l = arr.length - 1;
   for(var k = 0; k < l; i++){
      var temp = result[k];
      result[k] = result[l];
      result[l] = temp
      l--;
   }
   return result.join(" ");
}
-----------------------------------------------------------------------------------------------------------------------------------------------
bsearch
