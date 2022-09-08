function createContact(){
    const contact = document.createElement("div")
    contact.classList.add("contact")

    const phoneNumber = document.createElement("p")
    phoneNumber.textContent = "📞 +47 12 34 56 78"

    const address = document.createElement("p")
    address.textContent = "🏠 Torggata 7, Oslo, Norway"

    const restaurantLocation = document.createElement("img")
    restaurantLocation.src = "img/map.png"
    restaurantLocation.alt = "Location of restaurant"

    contact.appendChild(phoneNumber)
    contact.appendChild(address)
    contact.appendChild(restaurantLocation)

    return contact
}

export default function loadContact(){
    const main = document.getElementById("main")
    main.textContent = ""
    main.appendChild(createContact())
}