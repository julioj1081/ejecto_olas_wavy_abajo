const ham = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
const wave = document.querySelector(".wavy");
const h2 = document.querySelector("section h2");


ham.addEventListener("click", ()=>{
    navlinks.classList.toggle("open");
    h2.classList.toggle("active");
    wave.classList.toggle("active");
});