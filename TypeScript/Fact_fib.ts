var n4:number = 5;
var prod:number = 1;
for(i=1;i<=n4;i++){
    prod=prod*i;
}
console.log(`factorial of ${n4} is ${prod}`);

//fibonacci series
var start:number=1,start1:number=1;
var Sum:number;
console.log("first 10 fibonacci series");
console.log(start);
console.log(start1);
for(i=0;i<8;i++){
    sum=start+start1;
    console.log(sum);
    start=start1;
    start1=sum;
}