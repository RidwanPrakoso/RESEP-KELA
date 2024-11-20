// Fungsi untuk membuka mode edit
function enableEdit(field) {
	const displayElement = document.getElementById(field + '-display');
	const editElement = document.getElementById(field + '-edit');
	const editIcon = displayElement.nextElementSibling;  // Icon edit

	if (editElement.style.display === "none") {
	  editElement.style.display = "inline-block";  // Menampilkan input
	  displayElement.style.display = "none";      // Menyembunyikan teks
	  editIcon.innerHTML = "✔️";                  // Mengubah ikon menjadi centang
	} else {
	  displayElement.innerHTML = editElement.value; // Menyimpan nilai dari input ke teks
	  editElement.style.display = "none";          // Menyembunyikan input
	  displayElement.style.display = "inline";     // Menampilkan teks
	  editIcon.innerHTML = "✏️";                   // Kembali ke ikon edit
	}
  }

  // Fungsi untuk kembali ke halaman sebelumnya
  function goBack() {
	window.history.back();
  }
