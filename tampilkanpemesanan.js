const userlocal = sessionStorage.getItem("user")
const user = JSON.parse(userlocal);

document.getElementById("alamat").innerHTML = user[0].alamat;
document.getElementById("telp").innerHTML = user[0].telp;
document.getElementById("tgl_sewa").innerHTML = user[0].tgl_sewa;
document.getElementById("tgl_kembali").innerHTML = user[0].tgl_kembali;
document.getElementById("Mobil").innerHTML = user[0].Mobil;
document.getElementById("pelayanan").innerHTML = user[0].pelayanan;
document.getElementById("penyewa").innerHTML = user[0].penyewa;
document.getElementById("supir").innerHTML = user[0].supir;



