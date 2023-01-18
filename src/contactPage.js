function contactContent(){
    const content = document.getElementById("content")
    

    const box = document.getElementById("box")
    box.innerText = ""

    const phone = document.createElement("div")
    phone.innerText = ")!@@!)#124124141"
    box.appendChild(phone)
}

export { contactContent }