const menuButton = document.getElementById("menuButton");
const list=document.getElementById("list");
menuButton.addEventListener("click", () => {
    list.classList.toggle("hidden");
});