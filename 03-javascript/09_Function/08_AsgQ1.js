let arr=[1,3,4,5,3,8,9,5];
n=arr.length;
function largerNum(num){
    for(let i=0;i<n;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}
largerNum(7);