const open = document.querySelector(".fa-bars");
const close = document.querySelector(".xmark");
const menu = document.querySelector(".nav-menu");

close.addEventListener("click", ()=>{
    menu.style.top = "-100%";
});

open.addEventListener("click", ()=>{
    menu.style.top = "0";
});