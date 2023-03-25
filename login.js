const form = document.getElementById("form")
const email = document.getElementById("email");
const pass = document.getElementById("pass");


form.addEventListener("submit", function (e) {
    e.preventDefault()
    
const userlocal = localStorage.getItem("user")
const user = JSON.parse(userlocal);


    if (email.value == user[0].Email && pass.value == user[0].Password){
        alert("Selamat Datang")
        window.location.href = "index.html";
    }else{
        alert ("Email atau Password salah")
    }
})