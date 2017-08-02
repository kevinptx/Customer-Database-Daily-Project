console.log(customers)
//Grabbing container class node from DOM (HTML)
let container = document.querySelector(".container")

//From container class, create a header node through DOM process:
// createElement(): creates a new HTML element, attaches it to the document, and returns it.
let header = document.createElement("header")
let h1 = document.createElement("h1")
// The createTextNode() method creates a Text Node with the specified text.
let h1Text = document.createTextNode("INTERNAL COMPANY DIRECTORY")
//appends the h1 element to the header node
header.append(h1)
//appends h1Text to the h1 node
h1.append(h1Text)
//appends header to the container class
container.append(header)


//create main node: creates the "main" then attaches it to the container class
let main = document.createElement("main")
container.append(main)

//creates customer list
for(var i = 0; i<customers.results.length; i++) {

    let customer = customers.results[i]

    let div = document.createElement("div")
    main.append(div)


    let img = document.createElement("img")
    img.src = customer.picture.large

    let labelName = document.createElement("label")
    labelName.innerHTML = `${customer.name.first} ${customer.name.last}`
    labelName.className = "name"

    let email = document.createElement("label")
    email.innerHTML = `${customer.email}`
    email.className = "email"

    let address = document.createElement("label")
    address.innerHTML = `${customer.location.street}`
    address.className = "address"

    let cityState = document.createElement("label")
    cityState.innerHTML = `${customer.location.city}, ${customer.location.state} ${customer.location.postcode}`
    cityState.className = "city"

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
    div.appendChild(cityState)
    div.appendChild(phoneNum)
    div.appendChild(social)
    document.body.appendChild(div)

}
