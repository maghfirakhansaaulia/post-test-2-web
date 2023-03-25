const submit = document.getElementById("submit");
submit.onclick = regis;

function regis(e) {
  e.preventDefault();
  const alamat = document.getElementById("alamat");
  const telp = document.getElementById("telp");
  const tgl_sewa = document.getElementById("tgl_sewa");
  const tgl_kembali = document.getElementById("tgl_kembali");
  const Mobil = document.getElementById("mobil");

  let pelayanan = [];
  let ingin = document.getElementsByName("pelayanan");
  for (let z = 0; z < ingin.length; z++) {
    if (ingin[z].checked == true) {
      pelayanan.push(ingin[z].value);
    }
  }

  let penyewa;
  if (document.getElementById("perorangan").checked) {
    penyewa = document.getElementById("perorangan").value;
  } else {
    penyewa = document.getElementById("perusahaan").value;
  }

  let supir;
  if (document.getElementById("Ya").checked) {
    supir = document.getElementById("Ya").value;
  } else {
    supir = document.getElementById("Tidak").value;
  }

  let user = [];
  user.push({
    alamat: alamat.value,
    telp: telp.value,
    tgl_sewa: tgl_sewa.value,
    tgl_kembali: tgl_kembali.value,
    Mobil: Mobil.value,
    pelayanan: pelayanan,
    penyewa: penyewa,
    supir: supir,
  });
  let ubah = JSON.stringify(user);
  sessionStorage.setItem("user", ubah);

  alert("Berhasil Mendaftar");
  window.location.href = "tampilkanpemesanan.html";
}