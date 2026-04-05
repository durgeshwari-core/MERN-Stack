let num=2334556;
sum=0;
while(num>0){
    sum+=num%110;
    num = Math.floor(num / 10);
}
console.log(sum);