let nav = document.getElementById("nav")
let carousal = document.querySelector(".scroll")
let navbar = document.querySelector(".navbar")
let about = document.getElementById("about")
let singelProducts = document.getElementById("singal-products")
let toScroll = document.getElementById("to-top")

// console.log(toScroll)

window.addEventListener("scroll", function (mo) {
    let scrollG = scrollY
    let toAbout = about.offsetHeight
    // console.log(toAbout);
    if (scrollG > 320) {
        nav.style.position = "fixed"
        nav.style.top = "0"
        nav.style.padding = "10px 0"
        nav.style.transition = "1s"
        nav.style.backgroundColor = "#242424"
    } else {
        nav.style.position = "relative"
        nav.style.transition = "1s"
        nav.style.backgroundColor = "transparent"
        nav.style.top = "0"
        nav.style.padding = "0"
    }
    if (scrollG > toAbout + 400) {
        toScroll.style.display = "flex"
        toScroll.scrollTo(0, 0)
    } else {
        toScroll.style.display = "none"
    }
})
// ------------------------New Line------------------------

// Change-Picture
let biggestPicture = document.getElementById("parent-img")
let childPicture = document.querySelectorAll(".child-img")
// console.log(biggestPicture, childPicture)
for (let i = 0; i < childPicture.length; i++) {
    childPicture[i].addEventListener("click", function (mo) {
        let allimgs = mo.target.getAttribute("src")
        biggestPicture.setAttribute("src", allimgs)
    })
}
//End Change-Picture

// ------------------------New Line------------------------

// Timer For Sale
let countDownDate = new Date("Sep 30, 2024 15:37:25").getTime();

let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor(distance) % 60;
        // Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("day").innerHTML = days
    document.getElementById("Hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds
        + minutes + seconds + "s ";
    if (distance < 0) {
        clearInterval(x);
    }
}, 1000);
// End Timer

// ------------------------New Line------------------------

// Data From Api
let container = document.getElementById("containers")
let containerApi = [
    {
        "id": 1,
        "title": "Enim Expedita Sed",
        "price": 109.95,
        "category": "Enim Expedita Sed",
        "image": "picture/ChangePicture/furniture_img1.jpg",
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "category": "Adipisci Officia Libero",
        "image": "picture/ChangePicture/furniture_img2.jpg",
    },
    {
        "id": 3,
        "title": "Internet Tend To Repeat",
        "price": 55.99,
        "image": "picture/ChangePicture/furniture_img3.jpg",
    },
    {
        "id": 4,
        "title": "Many Desktop Publishing",
        "price": 15.99,
        "image": "picture/ChangePicture/furniture_img4.jpg",
    },
    {
        "id": 5,
        "title": "Injected Humour Repetition",
        "price": 695,
        "image": "picture/ChangePicture/furniture_img5.jpg",
    },
    {
        "id": 6,
        "title": "Randomised Humour Words",
        "price": 168,
        "image": "picture/ChangePicture/furniture_img6.jpg",
    },
    {
        "id": 7,
        "title": "Expedita Distinctio Rerum",
        "price": 9.99,
        "image": "picture/ChangePicture/furniture_img7.jpg",
    },
    {
        "id": 8,
        "title": "Itaque Earum Rerum",
        "price": 10.99,
        "image": "picture/ChangePicture/furniture_img8.jpg",
    }
]
// let containerApi = ``
// async function bathroom() {
//     let dataApi = await fetch(containerApia)
//     containerApi = (await dataApi.json())
//     getDataApi()
// }
// bathroom()
function getDataApi() {
    // console.log(containerApi)
    let cartoon = ``
    for (let i = 0; i < containerApi.length; i++) {
        if (containerApi[i].image !== null) {
            cartoon += `
         <div class="card mood">
         <div class="box-imgs mood">
           <img src="${containerApi[i].image}" alt="">
         </div>
         <div class="paragraph mood">
           <h6>${containerApi[i].title.split(" ").splice(1, 4).join(" ")}</h6>
           <p>$${containerApi[i].price}</p>
           <button class="right" onclick="moreInfo(${i})">Read More</button>
         </div>
        </div>
         `
        }
    }
    containers.innerHTML = cartoon
}
getDataApi()

function moreInfo(mo) {

    localStorage.setItem("data", JSON.stringify(containerApi[mo]))
    location.href = "http://127.0.0.1:5500/Product.html"
    location.href = "file:///D:/Learn%20Website/All-Tasks/Project/Project/Product.html"

}
// let xx = "im front end develpoer"
// console.log(xx.split(" ").splice(1, 4).join(" "))
// End the data Api

// Event Scroll to Product

// ------------------------New Line------------------------

// console.log(products)
window.addEventListener("click", function (mo) {
    mo.preventDefault()
    // console.log(scrollNav)
    if (mo.target.className == ("nav-link active products")) {
        container.scrollIntoView()
    }
    if (mo.target.className == ("nav-link active home")) {
        window.scrollTo(0, 0)
    }
    if (mo.target.className == ("nav-link active about")) {
        about.scrollIntoView()
    }
    if (mo.target.className == ("fa-solid fa-arrow-up")) {
        window.scrollTo(0, 0)
    }
    if (mo.target.className == ("to-top btn btn-outline-danger")) {
        window.scrollTo(0, 0)
    }
    if (mo.target.className == ("right laugh")) {
        alert("Enta Bdos Leeh aslen Wnta K7yeeen msh htshtry 7aga xD")
    }
    if (mo.target.className == ("nav-link active singal-products")) {
        singelProducts.scrollIntoView()
    }
})

// End Event Scroll to Product 

// ------------------------New Line------------------------

// syantax for fun ^^

let laugh = document.querySelectorAll("#laugh")
let buy = document.getElementById("Buy")
for (let i = 0; i < laugh.length; i++) {
    laugh[i].addEventListener("click", function () {
        if (laugh[0].length !== null) {
            alert("Msh Ubber da 3shan awdak el Page Tanya 3alla fkra !")
        }
    })
}

// ------------------------New Line------------------------

// here for exchange login & Register 
let registerx = document.getElementById("register")

registerx.addEventListener("click", function () {
    location.href = "http://127.0.0.1:5500/Login.html"
    location.href = "file:///D:/Learn%20Website/All-Tasks/Project/Project/login.html"
})
//End exchange

// ------------------------New Line------------------------

// Here for login
let login = document.getElementById("user")
let sgin = document.getElementById("sgin")
let loginx = document.getElementById("loginx")

login.addEventListener("click", function () {
    if (window !== null) {
        sgin.style.opacity = "1"
        sgin.style.bottom = "10%"
    }
})
loginx.addEventListener("click", function () {
    location.href = "http://127.0.0.1:5500/Login.html"
    location.href = "file:///D:/Learn%20Website/All-Tasks/Project/Project/login.html"
})


let email = document.getElementById("email")
let passowrd = document.getElementById("password")
let checkLogin = document.getElementById("click-login")
let errorEmail = document.getElementById("error-email")

checkLogin.addEventListener("click", function () {
    checkData()
})
let loginData = JSON.parse(localStorage.getItem("users"))


function checkData() {
    let fname = ``
    for (let i = 0; i < loginData.length; i++) {
        // console.log(loginData[i])
        if (loginData[i].email == email.value && loginData[i].passowrd == passowrd.value) {
            fname = `
            <button class="nameusers">${loginData[i].name}</button>
            <button  onclick="deleteUsers(${i})"><i class="fa-solid fa-right-from-bracket"></i></button>
            `
            sgin.style.bottom = "99%"
            sgin.style.opacity = "0"
            login.style.display = `none`
            errorEmail.style.opacity = "0"
            registerx.style.display = "none"
            break;
        } else {
            errorEmail.style.display = "block"
            login.style.display = `flex`
        }
    }
    document.getElementById("btn-text").innerHTML = fname
}

// ------------------------New Line------------------------


// Here Events For Contact us

let closee = document.getElementById("close")
let contact = document.getElementById("contact")
let buttoncontact = document.getElementById("contactbuttom")
let callUs = document.getElementById("contact-us")
let textarea = document.getElementById("textarea")
let textcotact = document.getElementById("text-contact")
let emailcotact = document.getElementById("email-contact")

function dataContact() {
    let textContact = {
        textarea: textarea.value
    }
    containerContact.push(textContact)
}
containerContact = []
buttoncontact.addEventListener("click", function (mo) {
    dataContact()

    let cartoon = ``
    for (let i = 0; i < containerContact.length; i++) {
        cartoon = `
        <div class="card">
          <p>${containerContact[i].textarea} </p>  
        </div>  
        `
    }
    document.getElementById("back-Text").innerHTML = cartoon
    textarea.value = ``
    emailcotact.value = ``
    textcotact.value = ``
})

callUs.addEventListener("click", function (mo) {
    if (window !== null) {
        contact.style.left = "0%"
        contact.style.transition = "1.5s"
        contact.style.opacity = "1"
    }
})
closee.addEventListener("click", function (mo) {
    if (window !== null) {
        contact.style.left = "110%"
        contact.style.transition = "2s"
        contact.style.opacity = "0"
    }
})

// End Events For Contact us


// ------------------------New Line------------------------


// Here for event Loading in background

let Loading = document.getElementById("loading")

function timerLoading() {
    if (window !== null) {
        Loading.style.top = "99%"
        Loading.style.transition = "2s"
        Loading.style.opacity = "0"
    }
}

setTimeout(() => {
    timerLoading()
}, 2500);

// End for event Loading in background


// ------------------------New Line------------------------

// Here for dark-mood

let darkMoodBlack = document.getElementById("dark-mood")
let darkmoodLight = document.getElementById("dark-mood-light")
let cards = document.querySelectorAll(".mood")
let text = document.querySelectorAll("p,h1,h2,h3,h4,h5,h6")
let footer = document.querySelectorAll(".tt")

for (let i = 0; i < cards.length; i++) {
    darkMoodBlack.addEventListener("click", function () {
        if (window !== null) {
            cards[i].style.backgroundColor = "#242424"
        }
    })
    darkmoodLight.addEventListener("click", function () {
        if (window !== null) {
            cards[i].style.backgroundColor = "#fff"

        }
    })
}
for (let i = 0; i < text.length; i++) {
    darkMoodBlack.addEventListener("click", function () {
        if (window !== null) {
            text[i].style.color = "#fff"
        }
        darkMoodBlack.style.display = "none"
        darkmoodLight.style.display = "flex"
    })
    darkmoodLight.addEventListener("click", function () {
        if (window !== null) {
            text[i].style.color = "#242424"
        }
        darkmoodLight.style.display = "none"
        darkMoodBlack.style.display = "flex"
    })
}

for (let i = 0; i < footer.length; i++) {
    darkmoodLight.addEventListener("click", function () {
        footer[i].style.color = "#fff"
    })
}


