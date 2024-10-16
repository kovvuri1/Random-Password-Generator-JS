let a=document.getElementById("gen");
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower="abcdefghijklmnopqrstuvwxyz";
let num="0123456789";
let special="@#$%&*?/*-+|";
let mix=upper+special
console.log(mix);
let password=""
function pass(){
    password+=upper[Math.floor(Math.random()*26)];
    // console.log(password);
    password+=num[Math.floor(Math.random()*num.length)];
    password+=special[Math.floor(Math.random()*special.length)];
    password+=mix[Math.floor(Math.random()*mix.length)];
    password+=num[Math.floor(Math.random()*num.length)];
    password+=lower[Math.floor(Math.random()*26)];
    console.log(password);
    a.innerHTML=password
    password=""    
}