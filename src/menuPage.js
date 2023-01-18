function menuContent(){
    const content = document.getElementById("content")

    const box = document.getElementById("box")
    box.innerText = ""

    const beverages = document.createElement("div")
    beverages.innerText = 'TEA'

    const sides = document.createElement("div")
    sides.innerText = "FRIES"

    const mains = document.createElement("div")
    mains.innerText = "STEAK"

    box.appendChild(beverages)
    box.appendChild(sides)
    box.appendChild(mains)
    
}

export { menuContent }