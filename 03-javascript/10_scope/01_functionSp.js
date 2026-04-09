let sum = 23; //global scope
function Printsum(a, b) {
    let sum = a + b;//function scope
    console.log(sum);
}
Printsum(1, 2);
console.log(sum);
