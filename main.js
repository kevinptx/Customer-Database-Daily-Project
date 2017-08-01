console.log(customers)

let titleDiv = document.createElement("div")
let main = document.querySelector(".main")

let title = document.createElement("h1")
title.innerHTML = "Internal Company Directory"
title.className = "title"

titleDiv.appendChild(title)
document.body.appendChild(titleDiv)

for(var i = 0; i<customers.results.length; i++) {

    let customer = customers.results[i]

    let div = document.createElement("div")

    let img = document.createElement("img")
    img.src = customer.picture.large

    let labelName = document.createElement("label")
    labelName.innerHTML = `${customer.name.first} ${customer.name.last}`
    labelName.className = "name"

    let email = document.createElement("label")
    email.innerHTML = `${customer.email}`
    email.className = "email"

    let address = document.createElement("label")
    address.innerHTML = `${customer.location.street} ${customer.location.city}, ${customer.location.state} ${customer.location.postcode}`
    address.className = "address"

    let phoneNum = document.createElement("label")
    phoneNum.innerHTML = `${customer.phone}`
    phoneNum.className = "phone"

    let social = document.createElement("label")
    social.innerHTML = `${customer.id.value}`
    social.className = "social"


    div.appendChild(img)
    div.appendChild(labelName)
    div.appendChild(email)
    div.appendChild(address)
    div.appendChild(phoneNum)
    div.appendChild(social)
    document.body.main.appendChild(div)

}
