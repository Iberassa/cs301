function stack(number){
let sum =0
  for(i=1;i<=number;i++){
    sum+=i
    if (sum===number){
      return true
    }else
    if(sum>number){
      break;
    }

  }
 return false 
}

//console.log(stack(21))
let sum=0
for(i=1;i<=100;i++){
  sum+=i
}
console.log(sum)