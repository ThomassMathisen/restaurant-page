function createMenu(){
    const menu = document.createElement("div")
    menu.classList.add("menu")

    menu.appendChild(
        createMenuItem(
            "Kebab",
            "Döner kebab, jalapeños, red onion, 100% mozzarella, pizza sauce & topped with kebab dressing"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Piccante",
            "Piccante salami, grilled peppers, red onions, 100% mozzarella & pizza sauce"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Pepperoni",
            "Double pepperoni, 100% mozzarella, pizza sauce & topped with extra mozzarella"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Margherita",
            "100% mozzarella & pizza sauce"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Ham",
            "Ham, 100% mozzarella & pizza sauce"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Vegetarian",
            "Artichokes, grilled peppers, red onions, 100% mozzarella & pizza sauce"
        )
    );

    return menu
}

function createMenuItem(name, description){
    const menuItem = document.createElement("div")
    menuItem.classList.add("menu-item")

    const foodName = document.createElement("h2")
    foodName.textContent = name;

    const foodDescription = document.createElement("p")
    foodDescription.textContent = description;

    const foodImage = document.createElement("img");
    foodImage.src = `img/${name.toLowerCase()}.png`;
    foodImage.alt = `${name}`;

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem
}


export default function loadMenu(){
    const main = document.getElementById("main")
    main.textContent = ""
    main.appendChild(createMenu())
}