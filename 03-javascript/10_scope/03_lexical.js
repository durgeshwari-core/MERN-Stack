function outerFun(){
    let x=23;
    function innerFun(){
        console.log(x);
    }
    innerFun();
}