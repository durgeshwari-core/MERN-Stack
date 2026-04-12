//click event
let p= document.querySelector("p");
p.addEventListener("click",function fun(){
        p.style.backgroundColor="pink";
})
//input event
let inpt=document.querySelector("input");
inpt.addEventListener("input",function (detl){
    if(detl.data!==null){
    console.log(detl.data);}
})
//changeEvent
let val = document.querySelector("select");
val.addEventListener("change",function(delt){
    console.log(delt.target.value)
});
//changing h3 heading
let device= document.querySelector("#device");
val.addEventListener("change",function(detl){
    device.textContent=`${detl.target.value} device selected`;
});
