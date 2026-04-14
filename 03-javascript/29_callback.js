function print(val){
    setTimeout(
        ()=>{ console.log(val)},
        Math.floor(Math.random()*10)*1000
    );
}

print( 12
); //Callback