// Fungsi untuk membuka info kue
function openKueInfo(kueName) {
  // Menyesuaikan URL berdasarkan nama kue yang diberikan
  window.location.href = 'resep/' + kueName + '.html';
}
  
  // Fungsi untuk menampilkan preview kue
  function showPreview(kue) {
    var img = document.getElementById('kue-img');
    img.src = kue + '.jpg';
    img.alt = kue;
    img.style.display = 'block';
  }
  
  // Fungsi untuk menyembunyikan preview kue
  function hidePreview() {
    var img = document.getElementById('kue-img');
    img.style.display = 'none';
  }
  