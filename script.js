let menuDipilih = "";

function pesan(menu) {
  menuDipilih = menu;
  document.getElementById("menu-dipilih").innerText = menu;
  document.getElementById("form-pesan").classList.remove("hidden");
}

function tutupForm() {
  document.getElementById("form-pesan").classList.add("hidden");
}

function kirimPesanan() {
  const nama = document.getElementById("nama").value;
  const jumlah = document.getElementById("jumlah").value;
  const catatan = document.getElementById("catatan").value;

  if (!nama || !jumlah) {
    alert("Nama dan jumlah harus diisi!");
    return;
  }

  const pesanan = {
    menu: menuDipilih,
    nama,
    jumlah,
    catatan
  };

  console.log("Pesanan dikirim:", pesanan);

  // Sementara: Simpan di localStorage atau tampilkan alert
  alert(`Terima kasih, ${nama}! Pesanan ${jumlah} ${menuDipilih} sudah diterima.`);

  // Reset form
  document.getElementById("nama").value = "";
  document.getElementById("jumlah").value = "";
  document.getElementById("catatan").value = "";
  tutupForm();
}
