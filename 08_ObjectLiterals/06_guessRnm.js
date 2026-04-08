let nam=prompt("enter your name");
let max=prompt("enter a maximum number");
let num=Math.floor(Math.random()*max)+1;
let guess=prompt("guess the number or quit");

while(true){
    if(guess=="quit"){
        console.log("saali gawar!!!");
        Break;
    }
    if(guess==num){
        console.log(`congratulations ${nam} you win ,${num} `)
        Break;
    }
}


