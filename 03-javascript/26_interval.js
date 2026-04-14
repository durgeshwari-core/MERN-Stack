let count=10;
 let intv =setInterval( function(){
    if(count>=1){
        count--;
        console.log(count)
    }
    else clearInterval(intv)
 },1000);
 