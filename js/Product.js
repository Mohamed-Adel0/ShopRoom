let Api = JSON.parse(localStorage.getItem("data"))

function dataProduct(mo) {
    let cartoon = ``
    if (Api !== null) {
        cartoon = `
        <div class="card">
        <img src="${Api.image}" alt="">
        </div>
        <div class="card">
        
        <h1>${Api.title}</h1>
        <p>Don't lose this opportunity from your hand</p>
        <p>$${Api.price}</p>
        <button class="right" onclick="moreInfo()">Back Home</button>
   
    </div>
        `
    }
    document.getElementById("container").innerHTML = cartoon

}
dataProduct()

function moreInfo() {
    location.href = ("http://127.0.0.1:5500/index.html")
    location.href = ("file:///D:/Learn%20Website/All-Tasks/Project/Project/index.html")
}

