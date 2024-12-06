let body = document.querySelector("body")
console.log(body)

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

// Bubble creation
let score = document.querySelector(".score")
let scoreNum = 0

setInterval(()=>{
    let bubble = document.createElement("div")
    bubble.classList.add("bubble")
    body.appendChild(bubble)

    //position 
    bubble.style.top = (10 +Math.random()*70)+"vh"
    bubble.style.left = (10+ Math.random()*70)+"vw"

    let r =Math.round(Math.random()*255)
    let g =Math.round(Math.random()*255)
    let b =Math.round(Math.random()*255)
    let color = "rgba(132,159,0255,0.8)"
    let colorBorder = "rgba("+r+","+g+","+b+ ","+0.7+")"
    bubble.style.background = color
    bubble.style.border = colorBorder

    bubble.addEventListener("mouseenter", function(){
        bubble.classList.add("bigBubble")
    })

    bubble.addEventListener("mouseleave", function(){
        bubble.classList.remove("bigBubble")
    })

    bubble.addEventListener("click", function(){
        scoreNum +=1
        bubble.remove()
        score.textContent = scoreNum
        
    })
}
, 1000)
