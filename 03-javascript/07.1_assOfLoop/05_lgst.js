let arr=[5,6,31,2,55,-2,0,];
let largest=0;
for(let j=0;j<arr.length;j++){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            largest=arr[i];
        }
    }
}
console.log(largest);