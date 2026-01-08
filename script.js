var overlay = document.querySelector(".overlay");
var popup = document.querySelector(".popup");
var btn = document.querySelector(".add-btn");

btn.addEventListener("click", function () {
    overlay.style.display = "block";
    popup.style.display = "block";
});

var canbtn = document.querySelector(".cancel-book");

canbtn.addEventListener("click", function (event) {
    event.preventDefault();
    overlay.style.display = "none";
    popup.style.display = "none";
});

var con = document.querySelector(".container");
var addbtn = document.querySelector(".add-book");
var bookname = document.querySelector(".book-name");
var autname = document.querySelector(".author-name");
var textdes = document.querySelector("#text-des");

addbtn.addEventListener("click", function (event) {
    event.preventDefault();

    if (bookname.value === "" || autname.value === "") {
        alert("Please fill all fields");
        return;
    }

    var div = document.createElement("div");
    div.classList.add("bookContainer");

    div.innerHTML = `
        <h2>${bookname.value}</h2>
        <h5>${autname.value}</h5>
        <p>${textdes.value}</p>
        <button class="delete-btn">Delete</button>
    `;

    div.querySelector(".delete-btn").addEventListener("click", function () {
        div.remove();
    });

    con.append(div);

    bookname.value = "";
    autname.value = "";
    textdes.value = "";

    overlay.style.display = "none";
    popup.style.display = "none";
});
