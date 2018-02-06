function linearSearch(input) {
  var random_numbers=[6,29,18,2,72,19,18,10,37];
  var hit=0;
  for(var i=0;i<random_numbers.length;i++)
  {
    if(input===random_numbers[i])
    {
      hit++;
    }
  }
  if(hit>0)
  {
    return hit;
  }
  else
  {
    return -1;
  }
}

console.log(linearSearch(18));
console.log(linearSearch(9));

function globalLinearSearch(cari,input) {
  var arr=input.split("");
  var temp=[];
  for(var i=0;i<=input.length;i++)
  {
    if(cari===input[i])
    {
      temp.push(i);
    }
  }
  return temp;
}

console.log(globalLinearSearch('a','banana'));
console.log(globalLinearSearch('o','choco'));
