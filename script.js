console.log("OTG is live");
const button = document.getElementById("join-btn");
button.addEventListener("click",function (){
    alert("Welcome to OTG. Ghakime");
});
//Get the button
let scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollToTopBtn.style.display = "block";
    } else{
        scrollToTopBtn.style.display = "none"; 
    }
};
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
document.querySelectorAll(".dropbtn").forEach(button => {
    button.addEventListener("click", function(e){
        e.preventDefault(); this.nextElementSibling.classList.toggle("show");
    });
});
//Close dropdown if you click outside
window.addEventListener("click", function(e){
    if(!e.target.matches(".dropbtn")){document.querySelectorAll(".dropdown-content").forEach(menu =>{
        menu.classList.remove("show");
    });
    }
});