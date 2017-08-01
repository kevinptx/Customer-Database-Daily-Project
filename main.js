console.log(customers)

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
