let body = document.getElementsByTagName("body")
let input = document.getElementsByTagName("form")

console.log(input)

// Title action
let title = document.title
window.addEventListener("blur", (event)=>document.title = "Reviens, je meurs !")
window.addEventListener("focus", (event)=>document.title = "Sauvons l'océan")

// Input action
let firstname = document.getElementById('firstname')
firstname.addEventListener("input", ()=>firstname.value = firstname.value.split("").reverse().join(""))