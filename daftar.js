const daftar = document.getElementById("daftar");
daftar.onclick = regis;


function regis(e){
    e.preventDefault();
    const nama= document.getElementById("nama");
    const email= document.getElementById("email");
    const pass= document.getElementById("pass");
    let user = []
    user.push ({
        Nama:nama.value, 
        Email:email.value,
        Password:pass.value,
    })
    let ubah = JSON.stringify(user)
    localStorage.setItem("user", ubah);

    alert("Berhasil Mendaftar");


}