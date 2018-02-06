'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  var count=0
  for(let i=0;i<values.length;i++){
    if(values[i]===target){
      count++
    }
  }
  if(count>0){
    return count
  }else{
    return -1
  }
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  var simpan=[]
  for(let i=0;i<values.length;i++){values[i]===target ? simpan.push(i):''}
  return simpan
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]

module.exports = {
  linearSearch,
  globalLinearSearch
}
