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
document.addEventListener('click', (event)=> {
    const toggles = document.querySelectorAll('.dropdown-toggle');
    const dropdowns = document.querySelectorAll('.dropdown-content');
    let clickedInsideDropdown = false;
    toggles.forEach((toggle, i)=>{const menu = dropdowns[i];
        if (toggle.contains(event.target)) {event.preventDefault();
            menu.classList.toggle('show');
            clickedInsideDropdown = true;
        } else {
            menu.classList.remove('show');
        }
    });
    dropdowns.forEach(menu=> {
        if (menu.contains(event.target))clickedInsideDropdown=true;
    });
    if (!clickedInsideDropdown) {
        dropdowns.forEach(menu => menu.classList.remove('show'));
    }
});