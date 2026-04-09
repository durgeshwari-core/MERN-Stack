let arr=["my","name","is","shreya","."];
function stringSum(arr){
    let result="";
    for(let i=0;i<arr.length;i++){
        result=result+arr[i];
    }
    return result
}
console.log(stringSum())