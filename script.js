console.log("OTG is live");
const button = document.getElementById("join-btn");
button.addEventListener("click",function (){
    alert("Welcome to OTG. Omni-Task Ghakime!");
});
//Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
if (scrollToTopBtn) {
window.onscroll = function(){
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        scrollToTopBtn.style.display = "block";
    } else{
        scrollToTopBtn.style.display = "none";
    }
};
//Scroll to top when clicked
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
}