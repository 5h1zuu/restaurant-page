function homePage(){
    
    const content = document.getElementById("content")
    

    const box = document.getElementById("box")
    box.innerText = ""

    const caption = document.createElement("p")
    caption.setAttribute("id", "caption")
    caption.textContent = "Best borgir in town"
    

    const age = document.createElement("p")
    caption.setAttribute("id", "age")
    age.textContent = "Established in 1959"
    

    const picture = document.createElement("div")
    picture.setAttribute("id", "picture")
    const person = document.createElement("img")
    person.setAttribute("id", "person")
    person.src = "../src/assets/icon.png"
    person.style.width = "200px"
    person.style.height = "200px"
    picture.appendChild(person)

    const end = document.createElement("p")
    end.setAttribute("id", "end")
    end.textContent = "Order online or visit us!"

    box.appendChild(caption)
    box.appendChild(age)
    box.appendChild(picture)
    box.appendChild(end)
    
    
}

export { homePage }