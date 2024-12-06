let body = document.getElementsByTagName("body")

// Title action
let title = document.title
window.addEventListener("blur", (event)=>document.title = "Reviens, je meurs !")
window.addEventListener("focus", (event)=>document.title = "Sauvons l'océan")

// Input action
let firstname = document.getElementById('firstname')
firstname.addEventListener("input", ()=>firstname.value = firstname.value.split("").reverse().join(""))

let lastname = document.getElementById('lastname')
lastname.addEventListener("input", ()=>{
    let tab_temp = []
    lastname.value.split("").forEach(letter => {
        tab_temp.push(String.fromCharCode((letter.charCodeAt()+1)%127))
    });
    lastname.value = tab_temp.join("") 
})

function validate(){
    const elem = document.getElementById('validate_button')
    elem.innerHTML = "Mail non conforme. Veuillez réessayer."
}