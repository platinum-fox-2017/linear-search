'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {

  const result = values.filter(value =>{
    return value === target
  })
  if(result.length ===0){
    return -1
  }else{
    return result.length
  }
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
// console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  // let tmp = []
  // for(let [index,value] of values.entries()){
  //   if(value === target){
  //     tmp.push(index)
  //   }
  // }

  // return tmp

  var iterator = values.keys()
  let tmp = []
  for (let key of iterator){
    if(values[key] === target){
      tmp.push(key)
    }
  }

  return tmp
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]

// module.exports = {
//   linearSearch,
//   globalLinearSearch
// }
