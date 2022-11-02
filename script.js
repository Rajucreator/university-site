let openMenuEl = document.getElementById("open")
let closeMenuEl = document.getElementById("close-menu")
let navLinksEl = document.getElementById("nav-links-id")

openMenuEl.onclick = function() {
    navLinksEl.style.right = "0";
    console.log("HEllo")
}
closeMenuEl.onclick = function() {
    navLinksEl.style.right = "-500px";
}

function openBar(){
    navLinksEl.style.right = "0";
    console.log("HEllo")
}
console.log("ankm")