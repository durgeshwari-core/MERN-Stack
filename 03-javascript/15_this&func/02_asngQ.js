let arr=[1,3,4,5,6,8,9];
const arraySum= (arr)=>{
    let avg=0;
    for(let i =0;i<arr.length;i++){
        avg=avg+arr[i];
    }
    console.log(avg/arr.length);
};
arraySum(arr);

// even or no
const isEven=(n)=>{
    if( n%2==0){
        console.log("is even");
    }
    else{
        console.log("not");    }
}
isEven(8);