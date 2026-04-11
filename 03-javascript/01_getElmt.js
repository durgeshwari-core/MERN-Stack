// function that returns array element largerthan number
let arr=[1,2,3,3,4,5,6,7,8,9,10];
let num=4;
function getElement(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}
getElement(arr,num);