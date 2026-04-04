const favorite = "shiddat";
let guess = prompt("guess my favorite movie or  quit");
while ((favorite != guess) && (guess = "quit")) {
    console.log("wrong");
    let guess = prompt("please!! try again");
}

if (guess == favorite) {
    console.log("yeah!! Right Guess");
}