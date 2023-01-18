import { homeContent } from "./mainPage"
import { menuContent } from "./menuPage"
import { homePage } from "./homePage"
import { contactContent } from "./contactPage"

let menu = document.getElementById("menu")
let home = document.getElementById("home")
let contact = document.getElementById("contact")

menu.addEventListener("click", menuContent)
home.addEventListener("click", homePage)
contact.addEventListener("click", contactContent)