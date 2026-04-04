let  cars=["kia","swift","XUV"];
//01-push => add at the end
cars.push("maruti")
console.log(cars);

//02-pop=> delete from end
cars.pop();
console.log(cars);

//03-.unshift=> add from start
cars.unshift("creata");
console.log(cars);

//04-shift=>delete from starting
cars.shift()
console.log(cars);

//05-.indexOf()=> to find index
console.log(cars.indexOf("kia"));

//06-.include()=>to find if something is present or not true/false
console.log(cars.includes("kia"));

//07-.concat=> it combine to array 
let firstArray=["apple","mango"];
let secondArray=["banna","grraps"];
console.log(firstArray.concat(secondArray));

//08-.reverrse=> it reverses the array
let alphabet=['a','b','c','d','e'];
console.log(alphabet.reverse());

//09-.slice=>give copy of portion
let list=["gradeA","gradeB","gradeC","gradeD","gradeE"];
console.log(list.slice());//print whole list
console.log(list.slice(1,4));//print (starting,ending-1)
console.log(list.slice(-4)); //print total length-num 5-4=1..so 1 to last 

//reference of an array =>address in memory
let array1=[1,2,3,4];
let array2=array1;




