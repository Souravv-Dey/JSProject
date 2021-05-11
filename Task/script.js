var counter = document.querySelector(".counter");
var counting = document.querySelector(".counting");
var img = document.querySelector(".img");

let count = 0;
setInterval(()=>{
    if(count<1000){
        count++;
        counter.innerText = count;
    }
},0.8);


setTimeout(()=>{
    counting.innerText = "Congo! You get a blue tick!!";    
    img.src = "./after.png";
},4200);
