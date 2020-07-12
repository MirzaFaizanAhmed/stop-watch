var min = 0;
var sec = 0;
var msec = 0;
var interval;
var minh = document.getElementById("min");
var sech = document.getElementById("sec");
var msech = document.getElementById("msec");
const strtbtn = document.getElementById('btn1');
const pausebtn = document.getElementById('btn2');
const resetbtn = document.getElementById('btn3');

function timer(){
    msec++
    msech.innerHTML = msec;
    if(msec === 100){
        sec++
        sech.innerHTML = sec; 
        msec = 0;
    }else if(sec === 60){
        min++
        minh.innerHTML = min;
        sec= 0;
    }
}

function start(){
    interval = setInterval(timer ,10)
     strtbtn.disabled=true;
    pausebtn.disabled=false;
     strtbtn.style.background="gray";
     pausebtn.style.background="blueviolet";
     resetbtn.disabled=false;
    resetbtn.style.background="blueviolet";
}
function pause(){
    clearInterval(interval);
    strtbtn.disabled=false;
    pausebtn.disabled=true;
    strtbtn.style.background="blueviolet";
    pausebtn.style.background="gray";
    resetbtn.disabled=false;
    resetbtn.style.background="blueviolet";
}
function reset(){
    min = 0;
    minh.innerHTML =min;
    sec=0;
    sech.innerHTML=sec;
    msec=0;
    msech.innerHTML=msec;

    pause();
    resetbtn.disabled=true;
    resetbtn.style.background="gray";
    strtbtn.disabled=false;
    strtbtn.style.background="blueviolet";
    pausebtn.disabled=false;
    pausebtn.style.background="blueviolet";

}


