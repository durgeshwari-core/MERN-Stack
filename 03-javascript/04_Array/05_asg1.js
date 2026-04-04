// question 1
let num=[1,2,3,4,-4,5,6];
console.log(num.slice(0,4));

//question 2
num.shift();
console.log(num);

//question 3
let item=prompt("enter a string");
if(item.length-1==0){
    console.log("string is empty");
}
else{
    console.log("string is not empty");
}
//question 4
let str="simla";
if(str==str.toLowerCase()){
    console.log("Lowercase");
}
else{
    console.log("Not a lowerCase");
}

//question 5
let apple="      very good for health      ";
console.log(apple.trim());

// question 6
let color=["red","blue","green"];
console.log(color.includes("red"));

