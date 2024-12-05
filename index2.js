let body = document.getElementsByTagName("body")

let title = document.title
window.addEventListener("blur", (event)=>document.title = "Reviens, je meurs !")
window.addEventListener("focus", (event)=>document.title = "Sauvons l'océan")