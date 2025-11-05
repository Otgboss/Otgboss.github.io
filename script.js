console.log("OTG is live");
const button = document.getElementById("join-btn");
button.addEventListener("click",function (){
    alert("Welcome to OTG. Ghakime");
});
//Get the button
const scrollBtn = document.getElementById("scrollToTopBtn");
const footer = document.querySelector("footer");
//show/hide when scrolling
window,addEventListener("scroll", ()=> {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
    //check if near footer
    const footerRect = footer.getBoundingClientRect();
    if (footerRect.top <window.innerHeight-80){
        scrollBtn.style.opacity="0"; //fade out near footer
    } else {
        scrollBtn.style.opacity="1"; //visible otherwise
    }
});
//Scroll to top when clicked
scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0, behavior: "smooth"});
});
const toggleButton= document.getElementById('theme-toggle');
const body=document.body;
toggleButton.addEventListener('click', ()=>{
    body.classList.toggle('dark-mode');
    //change button text based on theme
    if(body.classList.contains('dark-mode')){
        toggleButton.textContent='🌞';
       } else {
        toggleButton.textContent='🌙';
       }
});
document.querySelectorAll(".dropbtn").forEach(button =>{
    button.addEventListener("click",function(e){
        e.preventDefault();
this.nextElementSibling.classList.toggle("show");
    });
});
//Close dropdown if you click outside
window.addEventListener("click",function(e){
    if(!e.target.matches(".dropbtn")) {
document.querySelectorAll(".dropdown-content").forEach(menu =>{
    menu.classList.remove("show");
        });
    }
});
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = item.src;
    });
});
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});