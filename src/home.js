function createHome(){
    const home = document.createElement("div");
    home.classList.add("home");

const pizzaLogo = document.createElement("img");
pizzaLogo.src = "img/pizza-logo.png"
pizzaLogo.alt = "Logo"

home.appendChild(createParagraph("Welcome to Luciano's! The world's best pizza with fresh and homegrown ingredients. We make all of our pizza in our 500 year old stone oven!"));
home.appendChild(pizzaLogo)
home.appendChild(createParagraph("Order online or visit us!"))

return home
}

function createParagraph(text){
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph
}

export default function loadHome(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome())
}