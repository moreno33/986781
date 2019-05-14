var stop= document.getElementById("stop");
var start= document.getElementById("start");
var animationHolder= document.getElementById("animation-holder");
animationHolder.style.fontSize= document.getElementById("sizes").value;

var speed= document.getElementById("speed");
var speedValue;

if(speed.checked){
    speedValue= 50;
}else{
    speedValue= 250;
}


var position= 0;
var timeout;
function animate(actions, speed= speedValue){
    var length= actions.length;
    timeout= setTimeout(function () {
        animationHolder.value = actions[position];
        if(position<length-1){
            ++position;
        }else {
            position= 0;
        }
        animate(actions);
    }, speed)
}

var actions;

start.onclick= function () {
    stop.disabled= false;
    start.disabled= true;
    actions= tmp.split("=====");
    animate(actions);

}

var tmp;
stop.onclick= function () {
    stop.disabled= true;
    start.disabled= false;
    clearTimeout(timeout);
    animationHolder.value= tmp;
}


document.getElementById("animations").onchange= function () {
    animationHolder.value= ANIMATIONS[this.value];
    tmp= ANIMATIONS[this.value];
}
document.getElementById("sizes").onchange= function () {
    animationHolder.style.fontSize= this.value;
}

speed.onclick= function () {
    clearTimeout(timeout);
    if(this.checked){
        animate(actions, 50)
    } else {
        animate(actions, 250);
    }
}