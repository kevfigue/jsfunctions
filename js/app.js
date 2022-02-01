var number = 0;

function eleMaker (name,val){
    var ele = document.createElement("div");
    ele.innerHTML=name;
    ele.addEventListener("click", function (){
        increase(val);
    })
    document.body.querySelector(".main").appendChild(ele);
}

function increase (val){
    number=number+val;
    document.body.querySelector(".number").innerHTML=number;
}
function reset (){
    number=0;
    document.body.querySelector(".number").innerHTML=number;
}


document.body.querySelector(".clicker").addEventListener("click",function (){
    document.body.querySelector(".main").innerHTML="";
    eleMaker( "HULK SMASH!",100);
    // increase(2)
});

document.body.querySelector(".clicker2").addEventListener("click",function (){
    document.body.querySelector(".main").innerHTML="";
    eleMaker("Gotcha!", 50);
});

document.body.querySelector(".clicker3").addEventListener("click",function (){
    document.body.querySelector(".main").innerHTML="";
    eleMaker("Mink! mink!", 40);
});

document.body.querySelector(".clicker4").addEventListener("click",function (){
    document.body.querySelector(".main").innerHTML="";
    eleMaker("Pew! Bam!", 80);
});
document.body.querySelector(".clicker5").addEventListener("click",function (){
    document.body.querySelector(".main").innerHTML="";
    document.body.querySelector(".number").innerHTML="";
    eleMaker("",0 );
    reset();
});
