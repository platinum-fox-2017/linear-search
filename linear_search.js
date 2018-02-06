'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  //write your code here
  var result = -1;
  for(var i = 0; i<random_numbers.length; i++) {
    if(target == random_numbers[i]) {
      return i
    }
  }
  return result
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  //write your code here
  var indexArr = [];
  for(var i=0; i<banana_arr.length; i++) {
    if(banana_arr[i] == target) {
      indexArr.push(i);
    }
  }
  return indexArr;
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]

module.exports = {
  linearSearch,
  globalLinearSearch
}
