const square = (n) => {
    console.log(n * n);
}
square(5);

let id = setInterval(() => { console.log("hello world"); }, 2000);
console.log(id);

setTimeout(()=>{clearInterval(id);},10000);