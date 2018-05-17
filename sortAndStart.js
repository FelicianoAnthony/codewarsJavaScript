/*

You will be given an vector of string(s). You must sort it alphabetically (case-sensitive!!) and then return the first value.
The returned value must be a string, and have "***" between each of its letters.
You should not remove or add elements from/to the array.

*/


function twoSort(s) {

  let firstSorted = s.sort()[0]
  let firstStar = "";

  for (let i=0; i < firstSorted.length; i++) {
    if (i == firstSorted.length-1) {
      firstStar+=firstSorted[i]
    }
    else {
      firstStar+=firstSorted[i] + '***'
    }
  }
  return firstStar
  }