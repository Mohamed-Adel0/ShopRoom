// i will take the value from input's

let clickRegister = document.getElementById("click-login")
let fullname = document.getElementById("name")
let email = document.getElementById("email")
let passowrd = document.getElementById("passowrd")


// console.log(fullname, email, passowrd, clickLogin, clickRegister)


// ------------------------New Line------------------------
function displayUser(mo) {
    let userData = {
        name: fullname.value,
        email: email.value,
        passowrd: passowrd.value
    }
    userContainer.push(userData)
    localStorage.setItem("users", JSON.stringify(userContainer))
    // console.log(userContainer)
}
let userContainer = []
if (localStorage.getItem("users")) {
    userContainer = JSON.parse(localStorage.getItem("users"))
}
clickRegister.addEventListener("click", function (mo) {
    mo.preventDefault()
    displayUser()
    fullname.value = ``
    email.value = ``
    passowrd.value = ``
})


document.getElementById("home").addEventListener("click", function (mo) {
    mo.preventDefault()
    location.href = ("http://127.0.0.1:5500/index.html?")
    location.href = ("file:///D:/Learn%20Website/All-Tasks/Project/Project/index.html")
})

// end for register


// New Line for work on syntax code

