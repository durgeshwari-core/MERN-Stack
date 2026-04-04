// string are immutable=>old strings remained same and new string is formed with all the changes

// 01 trim() method=> it removes all the extra spaces from staring and end
let msg="      hello      , how are you?    ";
console.log(msg.trim());

// 02 .toUpperrCase and .toLowerCase
let myName="shREyA SaHu";
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

// Arguments in String

// 01 .indexOf(argument)=>give the index of that letter
let fav="ILoveCoding";
console.log(fav.indexOf("g"));
console.log(fav.indexOf("k"));

// chaining of method 
let flower="                     Roses                       ";
console.log(flower.trim().toUpperCase());

// slicing in string
console.log(fav.slice(1,5));
console.log(fav.slice(5));
console.log(fav.slice(-5));
// replace and repeate
let Choice="i choose my peace";
console.log(Choice.replace('i','I'));
console.log(Choice.replace('i','I'));

let every="mymymyyouyou";
console.log(every.replace("my","you"));//only replaces the first occurance


