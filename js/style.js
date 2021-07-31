let body = document.querySelector('body');
let container = document.getElementById("middle-section-container");

let first = document.getElementById("middle-first"),
    second = document.getElementById("middle-second"),
    third = document.getElementById("middle-third"),
    fourth = document.getElementById("middle-fourth"),
    fifth = document.getElementById("middle-fifth");

function changeBackground(color){
    document.body.style.background = color;
}
window.addEventListener('load', function(){
    changeBackground('#00c1b5');
});

window.addEventListener('scroll', ()=> {
    if(first.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight)){
        body.style.backgroundColor = "#00c1b5";
    }
    if(second.getBoundingClientRect().top < (window.innerHeight || document.documentElement.clientHeight)){
        body.style.backgroundColor = "#ff651a";
    }
    if(third.getBoundingClientRect().top < (window.innerHeight || document.documentElement.clientHeight)){
        body.style.backgroundColor = "#ffbe00";
    }
    if(fourth.getBoundingClientRect().top < (window.innerHeight || document.documentElement.clientHeight)){
        body.style.backgroundColor = "#1d3fbb";
    }
    if(fifth.getBoundingClientRect().top < (window.innerHeight || document.documentElement.clientHeight)){
        body.style.backgroundColor = "#e30512";
    }
})