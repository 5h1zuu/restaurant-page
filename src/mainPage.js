(function homeContent(){
    
    const content = document.getElementById("content")
    


    const header = document.createElement('div')
    header.setAttribute("id", "header")
    content.appendChild(header)

   
   const title = document.createElement("div")
    title.setAttribute("id", "title")
    title.innerText = "Loerm"
    header.appendChild(title)


    const tabs = document.createElement("ul")
    const home = document.createElement("li")
    home.setAttribute("id", "home")
    home.textContent = "Home"
    const menu = document.createElement("li")
    menu.setAttribute("id", "menu")
    menu.textContent = "Menu"
    const contact = document.createElement("li")
    contact.setAttribute("id", "contact")
    contact.textContent = "Contact"
    header.appendChild(tabs)
    tabs.appendChild(home)
    tabs.appendChild(menu) 
    tabs.appendChild(contact)

    const box = document.createElement("div")
    box.setAttribute("id", "box")
    content.appendChild(box)

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
    
    
}())

