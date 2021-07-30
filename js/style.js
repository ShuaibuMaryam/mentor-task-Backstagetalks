// window.onscroll = function() {scrollFunction()};

// const nodeList = document.querySelectorAll("section");
// console.log(nodeList);

// console.log(rect);

// //Convert to an array, then iterate
// const nodeArray = Array.prototype.slice.call(nodeList)
// nodeArray.forEach(
//     (section)=>{
//         const rect = section.getBoundingClientRect();
//         console.log("section:", section);
//     }
// );


// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
// }


// const scrollEvent = ()=>{
//   const main = document.querySelector('#middle-section-container');
//   const section1 = document.querySelector('#middle-first');
//   const body = document.querySelector('body');

//   if(main.scrollTop >= 0){
//     body.style.backgroundColor = '#00c1b5';
//   }
//   else{
//     body.style.backgroundColor = '#1d3fbb'
//   }
// }

// main.addEventListener('scroll', scrollEvent);

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




