onload = () => {
  document.body.classList.remove("container");
};
var musik = document.getElementById("musik");

// Fungsi untuk memutar musik
function putarMusik() {
  musik.style.backgroundSize = "auto";
  musik.style.backgroundPosition = "center";
}

// Fungsi untuk menghentikan musik
function hentikanMusik() {
  musik.style.backgroundSize = "0px 0px";
}

// Panggil fungsi putarMusik() untuk memutar musik saat halaman dimuat
putarMusik();
