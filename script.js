console.log("OTG is live");
const button = document.getElementById("join-btn");
button.addEventListener("click",function (){
    alert("Welcome to OTG. Omni-Task Ghakime!");
});
const changeBtn= document.getElementById("change-btn");
changeBtn.addEventListener("click",function (){
    document.getElementById("change-text").textContent="The text has been changed";
});