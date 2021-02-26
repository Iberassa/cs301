/* 
1
22
333
4444
55555
*/

for (let k=1;k<=5;k++){
    let row =""
    for (let l=1;l<=k;l++){
    row += k
}
console.log(row)
}


/* 
1
12
123
1234
12345
*/

for (m=1;m<=5;m++){
    let row = ""
    for(n=1;n<=m;n++){
    row += n
} 
console.log(row)        
}


/* 
55555
4444
333
22
1
*/
for (let i=5;i>=1;i--){
    let row = ""
    for (let j=1;j<=i; j++){
        row += i
    }
    console.log(row)
}